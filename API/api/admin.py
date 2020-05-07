from django.contrib import admin
from .models import HostelManager, Rating, Customer, AdminUser, Room, Property, User, Saved
# Register your models here.

admin.site.register(Saved)
admin.site.register(HostelManager)
admin.site.register(Rating)
admin.site.register(Customer)
admin.site.register(AdminUser)
admin.site.register(Room)
admin.site.register(Property)
admin.site.register(User)