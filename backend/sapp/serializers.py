from .models import Profile
from rest_framework import serializers
from .models import Profile
class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model=Profile
        fields=['profile_user','place','tags','logo_url']
 
    