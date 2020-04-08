from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import RatingViewSet, UserViewSet, HostelManagerViewSet, CustomerViewSet, AdminViewSet, RoomViewSet, PropertyViewSet, LoginView, LogoutView


router = routers.DefaultRouter()
router.register('users', UserViewSet, basename='user-list')
router.register('login', LoginView, basename='login')
router.register('hostel_managers', HostelManagerViewSet)
router.register('ratings', RatingViewSet)
router.register('customers', CustomerViewSet)
router.register('admins_custom', AdminViewSet)
router.register('rooms', RoomViewSet)
router.register('properties', PropertyViewSet)


urlpatterns = [

    path('', include(router.urls)),
    path('account/logout/', LogoutView.as_view(), name='logout')
]
