import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.decorators import authentication_classes
from django.http import JsonResponse

def getTopAiringAnime(request):
    url = 'https://gogoanime.consumet.stream/top-airing'
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data, safe=False)

    
def getRecentReleaseAnime(request):
    url = 'https://gogoanime.consumet.stream/recent-release'
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data, safe=False)

def getPopularAnime(request):
    url = 'https://gogoanime.consumet.stream/popular'
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data, safe=False)

def getAnimeMovies(request):
    url = 'https://gogoanime.consumet.stream/anime-movies'
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data, safe=False)


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def search(request, query):
    url = f"https://gogoanime.consumet.stream/search?keyw={query}"
    response = requests.get(url)
    results = response.json()
    return JsonResponse(results, safe=False)


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def getAnimeDetails(request, animeId):
    url = f"https://gogoanime.consumet.stream/anime-details/{animeId}"
    response = requests.get(url)
    results = response.json()
    return JsonResponse(results, safe=False)