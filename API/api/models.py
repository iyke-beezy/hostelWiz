from django.db import models
from django.contrib.auth.models import AbstractUser, Group
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.
def upload_path(instance, filename):
    return '/'.join(['hostelpics', str(instance.property), filename])


def upload_user(instance, filename):
    return '/'.join(['hosteluserpics', str(instance.email), filename])


class User(AbstractUser):
    groups = models.ForeignKey(Group, on_delete=models.CASCADE)
    email = models.EmailField(max_length=50, unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    contact = models.CharField(max_length=20, null=True)
    profile = models.ImageField(upload_to=upload_user, blank=True, null=True)

    REQUIRED_FIELDS = ['groups_id', 'email', 'first_name', 'last_name', 'contact']

    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'

    def get_full_name(self):
        return '%s %s' % (self.first_name, self.last_name)

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.username


class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, unique=True)


class HostelManager(models.Model):
    subscriptionType = models.CharField(max_length=32)
    status = models.BooleanField(default=False)
    startDate = models.DateTimeField(blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, unique=True)


class AdminUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, unique=True)


class Property(models.Model):
    name = models.CharField(max_length=32, unique=True, null=True)
    managerId = models.ForeignKey(HostelManager, on_delete=models.CASCADE)
    description = models.CharField(max_length=32)
    location = models.CharField(max_length=32)
    numberOfRooms = models.IntegerField(validators=[MinValueValidator(1)])
    status = models.BooleanField(default=False)
    type = models.CharField(max_length=32)
    headline = models.CharField(max_length=32)
    rate_type = models.CharField(max_length=32)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def no_of_ratings(self):
        ratings = Rating.objects.filter(property=self)
        return len(ratings)

    def avg_rating(self):
        sum = 0
        ratings = Rating.objects.filter(property=self)
        for rating in ratings:
            sum += rating.stars

        if len(ratings) > 0:
            return sum / len(ratings)
        else:
            return 0


class Rating(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])

    class Meta:
        unique_together = (('user', 'property'),)
        index_together = (('user', 'property'),)


class Room(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    roomNo = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    roomType = models.CharField(max_length=32)
    roomAvailable = models.BooleanField(default=False)


class PropertyImage(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to=upload_path, blank=True, null=True)


class Saved(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE, related_name='properties')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('user', 'property'),)
        index_together = (('user', 'property'),)
