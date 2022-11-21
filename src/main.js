

import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
let contenedor = document.querySelector("#contenedor")



 const movies = data.films
 console.log(movies);

 movies.forEach(movie => {
  contenedor.innerHTML += `<div class="movies"> <img src= "${movie.poster}" class="img-movie" > </div>`
  
  
 });
console.log(movie);



// import data from './data/lol/lol.js';
//import data from './data/ghibli/ghibli.js';

/*const API = './data/ghibli/ghibli.json/films';
import data from './data/rickandmorty/rickandmorty.js';


fetch(API)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }); */

