

//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
let contenedor = document.querySelector("#contenedor");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
mobileMenu.classList.remove('activo')


iconMenu.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu(){
  alert("hice click");
  mobileMenu.classList.toggle('activo');
}

 const movies = data.films
 console.log(movies);

 movies.forEach(movie => {

  contenedor.innerHTML += `<div class="movies"> <img src= "${movie.poster}" class="img-movie" > </div>`
    
 });
const rta = movies.filter(item => item.title);
console.log("repuest", rta.title)
 const search = (query) => {
  return  movies.filter(item => {
    return item.title.includes(query);
  })
}
console.log("buscar", search('castle'));





// import data from './data/lol/lol.js';
//import data from './data/ghibli/ghibli.js';

/*const API = './data/ghibli/ghibli.json/films';
import data from './data/rickandmorty/rickandmorty.js';


fetch(API)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }); */

