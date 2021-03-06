"""
Django settings for soi project.

Generated by 'django-admin startproject' using Django 3.1.7.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '6fb^wuv$0j(4iezgir($em#r3qk&r6@lxy!)f5gqb16#-c=k%#'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


CORS_ORIGIN_ALLOW_ALL = True

CORS_ORIGIN_WHITELIST = (
       'https://localhost:3000',
)

AUTH_USER_MODEL='login.User'
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'login',
    'iapp',
    'sapp',
    'chat',
    'channels',
    'rest_framework',
    'rest_framework.authtoken',
    'corsheaders',
    'djoser',
    'recommendation',
    'django_filters',

]
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',  # Responsible for token authentication
    ],
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'],
}
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]
ROOT_URLCONF = 'soi.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'soi.wsgi.application'
ASGI_APPLICATION = "soi.routing.application"
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels.layers.InMemoryChannelLayer"
    }
}
# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases


DATABASES = {
 # setting up of mongoDb happens here.the host string is the connection string from mongodbAtlas
 #name here is basically the database that forms
    'default': {
        'ENGINE': 'djongo',
        "CLIENT": {
           "name": "DjangoMongo",
           "host": "mongodb+srv://soi:samplepassword@mflix.mfei3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
           "username": "soi",
           "password": "samplepassword",
           "authMechanism": "SCRAM-SHA-1",
        },
    } 
    # 'default': {
    #     'ENGINE': 'django.db.backends.sqlite3',
    #     'NAME': BASE_DIR / 'db.sqlite3',
    # }
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True
# REST_FRAMEWORK = {
#     "DEFAULT_RENDERER_CLASSES": (
#         "rest_framework.renderers.JSONRenderer",
#     )
# }

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'shrutisusan055@gmail.com'
EMAIL_HOST_PASSWORD = 'fjwk gjoy wvse desa'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = 'SOI Team <noreply@soiteam.com>'
DOMAIN= "localhost:3000"
SITE_NAME= "localhost:3000"
DJOSER = {
   
    "USER_ID_FIELD": "username",
    "LOGIN_FIELD": "username",
    "PASSWORD_RESET_CONFIRM_URL": "reset-password/confirm/{uid}/{token}", # the reset link 
    'SERIALIZERS': {
        'token_create': 'login.serializers.CustomAuthToken',
    },
    }