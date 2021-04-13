from django.shortcuts import render
from .apps import RecommendationConfig 

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .apps import RecommendationConfig

class call_model(APIView):

    def get(self,request):
        if request.method == 'GET':
            
            # sentence is the query we want to get the prediction for
            params =  request.GET.get('Name')
            print(params)
            response = RecommendationConfig.engine.Recommend(name=params)
            return JsonResponse(response)
