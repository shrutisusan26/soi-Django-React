from django.conf.urls import url, include
from .views import *
from rest_framework.routers import DefaultRouter


""" backend url for investor now defaults to 
http:localhost:3000/soi/investor/signup """

router = DefaultRouter()
router.register('investor/signup', InvestorViewset)
router.register('startup/signup',StartupViewset)
urlpatterns = [
    url('soi/', include(router.urls)),
    url(r'^startup/(?P<action>.+)/(?P<startuppk>[-\w]+)/(?P<investorpk>[-\w]+)$',follow_unfollow_startup, name="follow-unfollow-startup"),
]