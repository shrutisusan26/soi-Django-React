# To install all requirements
# 1. pip install pipreqs
# 2. pip install -r requirements.txt

gloveFile = "/home/jinitsan/Documents/glove.6B.50d.txt"  #Download glove embeddings and change path accordingly

import numpy as np
import nltk
nltk.download('stopwords')
nltk.download('wordnet')
import re
from nltk.corpus import stopwords
import pandas as pd
import scipy
import seaborn as sns
import matplotlib.pyplot as plt
import gensim
from nltk.stem import WordNetLemmatizer 
from sklearn.feature_extraction.text import TfidfVectorizer
from gensim import corpora, models
from scipy import sparse as sp
from collections import defaultdict
import copy
from sklearn.metrics.pairwise import cosine_similarity
import joblib

embeddings = joblib.load("recommendation/recommendation_engine/embeddings.pkl")
tfidf = joblib.load("recommendation/recommendation_engine/tfidf.pkl")
corpus_tfidf_vectorizer = joblib.load("recommendation/recommendation_engine/corpus_tfidf_vectorizer.pkl")
corpus_vocabulary = defaultdict(None, copy.deepcopy(corpus_tfidf_vectorizer.vocabulary_))
corpus_vocabulary.default_factory = corpus_vocabulary.__len__
cosine_similarities = joblib.load("recommendation/recommendation_engine/cosine_similarities.pkl")
  
df = pd.read_excel("recommendation/recommendation_engine/P11-1000-Startups.xlsx",engine='openpyxl')
df.drop([334,982],inplace=True)

def lemmatize(text):
    return WordNetLemmatizer().lemmatize(text, pos='v')

class Engine:
    def __init__(self,embeddings=embeddings,tfidf=tfidf,corpus_vocabulary=corpus_vocabulary,cosine_similarities=cosine_similarities,df=df):
        self.embeddings = embeddings
        self.tfidf = tfidf
        self.corpus_vocabulary = corpus_vocabulary
        self.cosine_similarities = cosine_similarities
        self.df = df
    
    def preprocess(self, raw_text):
        # keep only words
        letters_only_text = re.sub("[^a-zA-Z]", " ", raw_text)
        # convert to lower case and split 
        words = letters_only_text.lower()
        return [lemmatize(token) for token in gensim.utils.simple_preprocess(words) if (token not in gensim.parsing.preprocessing.STOPWORDS and len(token) > 3) ]
    
    def loadGloveModel(self,gloveFile="/home/jinitsan/Documents/glove.6B.50d.txt"):
        print ("Loading Glove Model")
        with open(gloveFile, encoding="utf8" ) as f:
            content = f.readlines()
        model = {}
        for line in content:
            splitLine = line.split()
            word = splitLine[0]
            embedding = np.array([float(val) for val in splitLine[1:]])
            model[word] = embedding
        print ("Done.",len(model)," words loaded!")
        self.model = model
    
    def add_new_embeddings(self,queries):

        pre_query = [self.preprocess(query['Description']) for query in queries]
        queries = pd.DataFrame(queries)
        print(queries)
        
        query_vocabulary_vectorizer = TfidfVectorizer()
        query_vocabulary_vectorizer.fit_transform([' '.join(query) for query in pre_query])
        for word in query_vocabulary_vectorizer.vocabulary_.keys():
            corpus_vocabulary[word]

        query_tfidf = TfidfVectorizer(vocabulary=self.corpus_vocabulary).fit_transform([' '.join(query) for query in pre_query])

        self.tfidf.resize((self.tfidf.shape[0],query_tfidf.shape[1]))
        self.tfidf = sp.vstack([self.tfidf, query_tfidf])

        self.tfidf = self.tfidf.toarray()  
        
        for query in pre_query:
            
            embedding = np.zeros(50)
            tf_wts = 0
            dic_wts = {}
            features = dict(self.corpus_vocabulary)
            
            for w in query:
                embedding += self.tfidf[-1][features[w]]*self.model.get(w,0)
                tf_wts += self.tfidf[-1][features[w]]

            cosine_sim = cosine_similarity(embedding.reshape(1,-1),self.embeddings)

            self.cosine_similarities = np.vstack((self.cosine_similarities,np.ones((1,self.cosine_similarities.shape[1]))))
            self.cosine_similarities = np.hstack((self.cosine_similarities,np.ones((self.cosine_similarities.shape[0],1))))

            self.cosine_similarities[-1,:-1] = cosine_sim
            self.cosine_similarities[:-1,-1] = cosine_sim
            self.cosine_similarities[-1,-1] = 1

            self.embeddings.append(embedding/tf_wts)
        
        self.df = self.df.append(queries,ignore_index=True)

        self.tfidf = sp.csr_matrix(self.tfidf)
    
    
    def Recommend(self,name):
        idx = self.df[self.df['Name']==name].index[0]
        sim_scores = list(enumerate(self.cosine_similarities[idx]))
        sim_scores = sorted(sim_scores, key = lambda x: x[1], reverse = True)
        sim_scores = sim_scores[1:8]
        startup_indices = [i[0] for i in sim_scores]
        recommend = df.iloc[startup_indices]
        return recommend['Name'].to_dict()
