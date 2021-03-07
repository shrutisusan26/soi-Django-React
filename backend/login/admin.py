from django.contrib import admin

# Register your models here.

from .models import Startup,Investor,User
# by this youll be able to see these models under /admin
admin.site.register(Startup)
admin.site.register(Investor)
admin.site.register(User)