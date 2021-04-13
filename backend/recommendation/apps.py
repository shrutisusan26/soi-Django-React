from django.apps import AppConfig
from recommendation_engine.engine import add_new_embeddings,Recommend

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

embeddings = joblib.load("recommendation_engine/embeddings.pkl")
tfidf = joblib.load("recommendation_engine/tfidf.pkl")
corpus_tfidf_vectorizer = joblib.load("recommendation_engine/corpus_tfidf_vectorizer.pkl")
corpus_vocabulary = defaultdict(None, copy.deepcopy(corpus_tfidf_vectorizer.vocabulary_))
corpus_vocabulary.default_factory = corpus_vocabulary.__len__
cosine_similarities = joblib.load("recommendation_engine/cosine_similarities.pkl")

class RecommendationConfig(AppConfig):
    name = 'recommendation'
