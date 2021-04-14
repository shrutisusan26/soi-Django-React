from login.models import Startup,Investor
from django.db import models

class InvestorRecommendations(models.Model):
    user=models.OneToOneField(Investor,on_delete=models.CASCADE,primary_key=True)
    recommendations=models.ManyToManyField(Startup,related_name='Recommendations', blank=True,through='StartupInstance')
class StartupInstance(models.Model):
    startup=models.ForeignKey(Startup,on_delete=models.CASCADE,blank=True)
    investorrecommend=models.ForeignKey(InvestorRecommendations,on_delete=models.CASCADE)
    count = models.IntegerField()