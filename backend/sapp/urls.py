from django.conf.urls import url, include
from .views import profileViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('startup/profile', profileViewset)
urlpatterns = [
    url('soi/', include(router.urls)),
]