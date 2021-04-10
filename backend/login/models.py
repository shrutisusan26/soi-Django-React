from django.db import models
from django.contrib.auth.models import AbstractUser

# base User class with fields that'll be shared between startups and investors
# username is set as pk
class User(AbstractUser):
    is_startup=models.BooleanField(default=False)
    is_investor=models.BooleanField(default=False)
    email=models.EmailField(max_length=50)
    username=models.CharField(max_length=50,primary_key=True)
    password=models.CharField(max_length=50)

#investor models with foreign key reference to the base User model
class Investor(models.Model):
   user= models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
   first_name=models.CharField(max_length=100)
   last_name=models.CharField(max_length=100)
   
  
class Startup(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True) #Linking users to their startup, same as in investor
    startup_name = models.CharField(max_length=100) #Storing name of the startup
    startup_description = models.CharField(max_length=500) #Storing the description of the startup available to investors
    interested_investors=models.ManyToManyField(Investor, related_name='interested_investors', blank=True)
    
    @classmethod
    def follow_startup(cls, startup, follower):
        startup, created = cls.objects.get_or_create(pk=startup.user.username)
        startup.interested_investors.add(follower)

    @classmethod
    def unfollow_startup(cls, startup, follower):
        startup, created = cls.objects.get_or_create(pk=startup.user.username)
        startup.interested_investors.remove(follower)