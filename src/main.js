

import  { filterData }  from './data.js';
import data from './data/ghibli/ghibli.js';
let contenedor = document.querySelector("#contenedor");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const search = document.querySelector("#search");
mobileMenu.classList.remove('activo')

//console.log(" filtro data", filterData);
/*mostara y ocultar menu mobile*/

iconMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
  mobileMenu.classList.toggle('activo');
}

/*llamando al todo el API de studios Gilbli*/
 const movies = data.films
 console.log(movies);

 /* mostara poster de peliculas en el Dom*/
 movies.forEach(movie => {

  contenedor.innerHTML += `<div class="movies"> <img src= "${movie.poster}" class="img-movie" > </div>`
    
 });
 /*llmando array de titulos */

 var titulos = movies.map(function(titles) {
  return titles.title;

  
 });
 /*orden alfabetico*/
console.log("titulos", titulos.sort());


/*buscador por palabras*/
/*search.addEventListener('input', texto => {
  return  titulos.filter(item => {
    return item.includes(texto);
    
  })

  });*/

  /*filtrar imagenes de peliculas para mostrar*/
  search.addEventListener("input", () => {
    console.log(search.value);
    /*if(nameInput.value == "") {
      nameCard.innerText = "Nombre del usuario" 
    }else{
       nameCard.innerText = nameInput.value;
     }*/
    });

  
  console.log("searcha",search);






// import data from './data/lol/lol.js';
//import data from './data/ghibli/ghibli.js';

/*const API = './data/ghibli/ghibli.json/films';
import data from './data/rickandmorty/rickandmorty.js';


fetch(API)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }); */

