from django.shortcuts import render
from .apps import RecommendationConfig 
from rest_framework.decorators import api_view, renderer_classes
# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from rest_framework import status
from .apps import RecommendationConfig
from login.models import Investor,Startup
from sapp.models import Profile
from recommendation.models import InvestorRecommendations,StartupInstance
class call_model(APIView):

    def get(self,request,startuppk,investorpk):
        if request.method == 'GET':
            investoruser=Investor.objects.get(pk=investorpk)
            investor,created=InvestorRecommendations.objects.get_or_create(user=investoruser)
            response = RecommendationConfig.engine.Recommend(name=startuppk)
            # startup=Startup.objects.get(pk='Over-Hex')
            for names in response.values():
                startup=Startup.objects.get(pk=names)
                investor.recommendations.add(startup) 
            return JsonResponse(response)


@api_view(('GET',))
def get_recommendations(request,investor):
        print(investor)
        queryset=StartupInstance.objects.filter(investorrecommend=investor)
        l=[]
        for startups in queryset:
            dict_startup={}
            # startupspk=startups.startup.user.username
            dict_startup['startup_name']=startups.startup.startup_name 
            dict_startup['startup_description']=startups.startup.startup_description
            prof=Profile.objects.get(pk=startups.startup)
            dict_startup['place']=prof.place
            dict_startup['tags']=prof.tags
            dict_startup['logo_url']=prof.logo_url
            l.append(dict_startup)
        # print(l.reverse)
        return Response({"interested_startups":l[::-1]})
        # return queryset