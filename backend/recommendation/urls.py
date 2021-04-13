from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from recommendation import views

urlpatterns = [
    path('model/', views.call_model.as_view())
]