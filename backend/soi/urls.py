from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework.authtoken.views import obtain_auth_token

""" obtain_auth_token is responsible for giving tokens with regard to each user """
urlpatterns = [
    path('admin/', admin.site.urls),
    url('', include('login.urls')),
    url('auth/', obtain_auth_token),
    url('', include('sapp.urls')),
]
