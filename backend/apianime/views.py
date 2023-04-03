import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.decorators import authentication_classes
from django.http import JsonResponse

# All of this function do a different thing, the names are pretty self explanatory 
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

# this function is a bit different as it has a parameter we give to it in the front end
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def search(request, query):
    url = f"https://gogoanime.consumet.stream/search?keyw={query}"
    response = requests.get(url)
    results = response.json()
    return JsonResponse(results, safe=False)

# Same with before
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def getAnimeDetails(request, animeId):
    url = f"https://gogoanime.consumet.stream/anime-details/{animeId}"
    response = requests.get(url)
    results = response.json()
    return JsonResponse(results, safe=False)


# Same with before
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def getAnimeEpisode(request, episodeId):
    url = f"https://gogoanime.consumet.stream/vidcdn/watch/{episodeId}"
    response = requests.get(url)
    results = response.json()
    return JsonResponse(results, safe=False)