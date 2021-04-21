from .models import Profile
from rest_framework import serializers
from .models import Profile
from login.serializers import UserSerializer,StartupUserSerializer
class ProfileSerializer(serializers.ModelSerializer):
    profile_user = StartupUserSerializer()

    class Meta:
        model=Profile
        fields=['profile_user','place','tags','logo_url']
 