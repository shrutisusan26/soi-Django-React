import pandas as pd
from login.models import Startup, User
from sapp.models import Profile

df = pd.read_excel("P11-1000-Startups.xlsx",engine='openpyxl')
df.drop([334,982],inplace=True)

for idx in range(len(df)):
    startup_serializer = StartupUserSerializer(data={'user':{'is_startup':True,'is_investor':False,'email':"mail"+str(idx)+"@mail.com",'username':(df.iloc[idx]['Name']),'password':df.iloc[idx]['Name']+"1"},'startup_name':df.iloc[idx]['Name'],'startup_description':df.iloc[idx]['Description']})
    startup_serializer.is_valid()
    startup_serializer.save()
    startup=startup.objects.get(pk=df.iloc[idx]['Name'])
    profile = Profile.objects.create(profile_user=startup,place=df.iloc[idx]['City'],tags=df.iloc[idx]['Industry'],logo_url="www."+df.iloc[idx]['Name']+".com")
    