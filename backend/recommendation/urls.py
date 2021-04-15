from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import url, include
from recommendation import views

urlpatterns = [
    # path('model/', views.call_model.as_view()),
    url(r'^model/(?P<startuppk>[-\w]+)/(?P<investorpk>[-\w]+)$',views.call_model.as_view()),
    url(r'^get/(?P<investor>[-\w]+)$',views.get_recommendations),
]