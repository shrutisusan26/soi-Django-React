from django.shortcuts import render
from .serializers import ProfileSerializer
from .models import Profile
from rest_framework import viewsets

class profileViewset(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
