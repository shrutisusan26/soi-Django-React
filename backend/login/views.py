from rest_framework import viewsets
from .serializers import InvestorUserSerializer, StartupUserSerializer
from .models import Investor, Startup,User
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import UpdateModelMixin
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required
from django.core.mail import EmailMessage
from django.conf import settings
from django.template.loader import render_to_string
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination
class CustomPagination(PageNumberPagination):
    page_size = 18
    page_size_query_param = 'page_size'
    max_page_size = 150

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'page_size': self.page_size,
            'results': data
        })

class InvestorViewset(viewsets.ModelViewSet):
    queryset = Investor.objects.all()
    serializer_class = InvestorUserSerializer

class StartupViewset(viewsets.ModelViewSet,UpdateModelMixin):
    """
     This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Startup.objects.all()
    serializer_class = StartupUserSerializer
    pagination_class = CustomPagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['startup_name','startup_description','user']
    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return self.update(request, *args, **kwargs)
    
    # def update(self, request, *args, **kwargs):
    #     partial = kwargs.pop('partial', False)
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance, data=request.data, partial=partial)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_update(serializer)
    #     return Response(serializer.data)

@api_view([ 'GET' ])
def follow_unfollow_startup(request, action, startuppk,investorpk):
    """
    Follower for your startup is going to be an investor, hardcoded for now
    Get the startup object which the investor clicks using the pk
    depending on the action namely add or remove call the follow_startup or unfollow_Startup
    With each startup you have an array of interested investors 
    maintained to which as and when the investor clicks the investor gets added to the list
    Same goes with action -remove
    """
    name1=str(investorpk)
    follower = Investor.objects.get(pk=name1) 
    name=str(startuppk)
    user = Startup.objects.get(pk=name)
    if action == "add":
        Startup.follow_startup(user, follower)
    elif action == "remove":
        Startup.unfollow_startup(user, follower)
    return Response(status=status.HTTP_200_OK)
