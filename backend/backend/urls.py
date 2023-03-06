"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin

# add include to the path
from django.urls import path, include

# import views from todo
from todo import views

# import routers from the REST framework
# it is necessary for routing
from rest_framework import routers

#import views from users
from users import views
from users.views import register_user, retrieveUser

#import function anime
from apianime.views import getTopAiringAnime, getAnimeMovies, getPopularAnime, getRecentReleaseAnime
from apianime.views import search
# create a router object
router = routers.DefaultRouter()

# register the router
# router.register(r'tasks', views.TodoView, 'task')

urlpatterns = [
	path('admin/', admin.site.urls),
    path('login/', views.LoginView.as_view()),
	path('todo/', include(router.urls)),
    path('profile/', views.ProfileView.as_view()),
    path('logout/', views.LogoutView.as_view()),
    path('register/', register_user, name='register_user'),
    path('retrieveUser/', retrieveUser, name="retriveUser"),
    path('anime/TopAiringAnime', getTopAiringAnime, name='TopAiring'),
    path('anime/AnimeMovies', getAnimeMovies, name='AnimeMovies'),
    path('anime/PopularAnime', getPopularAnime, name='PopularAnime'),
    path('anime/RecentRelease', getRecentReleaseAnime, name='RecentRelease'),
    path('anime/search/<str:query>/', search),
]

