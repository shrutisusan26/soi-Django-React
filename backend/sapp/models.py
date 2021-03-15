from django.db import models
from login.models import Startup,Investor
# Create your models here.
class Profile(models.Model):
    profile_user=models.OneToOneField(Startup, on_delete=models.CASCADE,primary_key=True)
    place=models.CharField(max_length=100)
    tags=models.CharField(max_length=100)
    logo_url=models.CharField(max_length=100)


