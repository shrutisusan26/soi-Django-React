from django.shortcuts import render
from .serializers import ProfileSerializer
from .models import Profile
from login.models import Startup
from rest_framework import viewsets
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
class CustomPagination(PageNumberPagination):
    page_size = 7
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

class profileViewset(viewsets.ModelViewSet):
    
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    pagination_class = CustomPagination
    # def get_queryset(self):
    #     return print(self.request.user)

# def listing(request):
#     Startups = Startup.objects.all()
#     paginator = Paginator(Startups, 25) # Show 25 contacts per page
#     page=request.GET.get('page')
#     try:
#         contacts = paginator.page(page)
#     except PageNotAnInteger:
#         # If page is not an integer, deliver first page.
#         contacts = paginator.page(1)
#     except EmptyPage:
#         # If page is out of range (e.g. 9999), deliver last page of results.
#         contacts = paginator.page(paginator.num_pages)
#     queryset = list(chain(contacts),paginator.count)
#     content = {'total_page_count': paginator.num_pages, 'data': queryset}
#     return JsonResponse(content)
#     # return contacts