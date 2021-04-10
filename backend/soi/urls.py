from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from login.serializers import CustomAuthToken
""" obtain_auth_token is responsible for giving tokens with regard to each user """
urlpatterns = [
    path('admin/', admin.site.urls),
    url('', include('login.urls')),
    path('api-token-auth/', CustomAuthToken.as_view()),
    url('', include('sapp.urls')),
    path('chat/', include('chat.api.urls', namespace='chat')),
    url(r'^auth/', include('djoser.urls')),
]
