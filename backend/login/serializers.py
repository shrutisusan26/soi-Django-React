from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Investor,User, Startup
from django.contrib.auth.hashers import make_password
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
class UserSerializer(serializers.ModelSerializer):
    # additional args to make password hidden
    password = serializers.CharField(required=True, style={'input_type': 'password'},write_only=True)

    class Meta:
        model=User
        fields=['username','email','password'] 

class InvestorUserSerializer(serializers.ModelSerializer):
    
    #user instance needs to be created to be used in create() further
    user = UserSerializer()
    class Meta:
        model=Investor
        fields=['first_name','last_name','user']
    def create(self, validated_data):
        """ validated_date is a dictionary with fields 'user','first_name','last_name'
        'user' corresponds to our base user with fields like 'username' 'email' 'password'
        'user' is first popped from the dictionary,passwords encrypted using make_password
        a user instance is created using User.objects.create  and is_investor is set to true
        print(validated_data) and print(user_data) to understand better """
        user_data = validated_data.pop('user')
        user_data["password"]=make_password(user_data['password'])
        user=User.objects.create(**user_data)
        user.is_investor=True
        user.save()
        investor = Investor.objects.create(user=user,**validated_data)
        Token.objects.create(user=user)
        return investor 
    
class StartupUserSerializer(serializers.ModelSerializer):
    
    #user instance needs to be created to be used in create() further
    user = UserSerializer()
    class Meta:
        model=Startup
        fields=['startup_name','startup_description','user']
    def create(self, validated_data):
        """ validated_date is a dictionary with fields 'user','startup_name','startup_description'
        'user' corresponds to our base user with fields like 'username' 'email' 'password'
        'user' is first popped from the dictionary,passwords encrypted using make_password
        a user instance is created using User.objects.create  and is_startup is set to true
        print(validated_data) and print(user_data) to understand better """
        user_data = validated_data.pop('user')
        user_data["password"]=make_password(user_data['password'])
        user=User.objects.create(**user_data)
        user.is_startup=True
        user.save()
        print(validated_data)
        startup = Startup.objects.create(user=user,**validated_data)
        Token.objects.create(user=user)
        return startup 

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
        })
