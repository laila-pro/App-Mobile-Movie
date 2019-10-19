// API/TMDBApi.js
//permet d'exploiter l'API
//la cle API
const API_TOKEN = "4e25771579e3b279e58b1c41c082dd61";
export function getFilmsFromApiWithSearchedText (text) {
const url = 'https://api.themoviedb.org/3/search/movie?api_key='+ API_TOKEN +'&language=fr&query=' + text
//fetch permet de recuperer les donnees de l API
return fetch(url)
//la fonction then convertit la reponse de l API en JSON et la retourne
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
export function getImageFromApi(name){
  return 'https://image.tmdb.org/t/p/w300/' + name
}
