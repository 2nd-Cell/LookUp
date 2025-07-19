from django.contrib import admin
from .models import Post, PostUser, Comment
# Register your models here.
admin.site.register(Post)
admin.site.register(PostUser)
admin.site.register(Comment)