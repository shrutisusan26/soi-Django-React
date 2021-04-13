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

embeddings = joblib.load("embeddings.pkl")
tfidf = joblib.load("tfidf.pkl")
corpus_tfidf_vectorizer = joblib.load("corpus_tfidf_vectorizer.pkl")
corpus_vocabulary = defaultdict(None, copy.deepcopy(corpus_tfidf_vectorizer.vocabulary_))
corpus_vocabulary.default_factory = corpus_vocabulary.__len__
cosine_similarities = joblib.load("cosine_similarities.pkl")

def lemmatize(text):
    return WordNetLemmatizer().lemmatize(text, pos='v')


def preprocess(raw_text):

    # keep only words
    letters_only_text = re.sub("[^a-zA-Z]", " ", raw_text)

    # convert to lower case and split 
    words = letters_only_text.lower()

    return [lemmatize(token) for token in gensim.utils.simple_preprocess(words) if (token not in gensim.parsing.preprocessing.STOPWORDS and len(token) > 3) ]

def loadGloveModel(gloveFile):
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
    return model

def add_new_embeddings(queries, embeddings, tfidf, vocab, cosine_similarities):

  pre_query = [preprocess(query) for query in queries]

  query_vocabulary_vectorizer = TfidfVectorizer()
  query_vocabulary_vectorizer.fit_transform([' '.join(query) for query in pre_query])
  for word in query_vocabulary_vectorizer.vocabulary_.keys():
    corpus_vocabulary[word]

  query_tfidf = TfidfVectorizer(vocabulary=corpus_vocabulary).fit_transform([' '.join(query) for query in pre_query])

  tfidf.resize((tfidf.shape[0],query_tfidf.shape[1]))
  tfidf = sp.vstack([tfidf, query_tfidf])

  tfidf = tfidf.toarray()  
  
  for query in pre_query:
    
    embedding = np.zeros(50)
    tf_wts = 0
    dic_wts = {}
    features = dict(corpus_vocabulary)
    
    for w in query:
      embedding += tfidf[-1][features[w]]*model.get(w,0)
      tf_wts += tfidf[-1][features[w]]

    cosine_sim = cosine_similarity(embedding.reshape(1,-1),embeddings)

    cosine_similarities = np.vstack((cosine_similarities,np.ones((1,cosine_similarities.shape[1]))))
    cosine_similarities = np.hstack((cosine_similarities,np.ones((cosine_similarities.shape[0],1))))

    cosine_similarities[-1,:-1] = cosine_sim
    cosine_similarities[:-1,-1] = cosine_sim
    cosine_similarities[-1,-1] = 1

    embeddings.append(embedding/tf_wts)

  return embeddings,sp.csr_matrix(tfidf),corpus_vocabulary, cosine_similarities

def Recommend(name,embeddings,cosine_similarities):
  idx = df[df['Name']==name].index[0]
  sim_scores = list(enumerate(cosine_similarities[idx]))
  sim_scores = sorted(sim_scores, key = lambda x: x[1], reverse = True)
  sim_scores = sim_scores[1:8]
  startup_indices = [i[0] for i in sim_scores]
  recommend = df.iloc[startup_indices]
  print(recommend)
  
df = pd.read_excel("P11-1000-Startups.xlsx",engine='openpyxl')
df.drop([334,982],inplace=True)

model = loadGloveModel(gloveFile)

Recommend('Cankix',embeddings,cosine_similarities)