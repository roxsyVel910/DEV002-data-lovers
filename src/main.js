import  { filterData }  from './data.js';

import data from './data/ghibli/ghibli.js';





let contenedor = document.querySelector("#contenedor");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const search = document.querySelector("#search");

const descripcionMovieSelct = document.querySelector(".description-movie");  
 const titleMovie = document.querySelector('.titleMovie');  
 let idMovie = document.querySelectorAll(".idMovie");


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
  console.log("locacion", movie.locations);

  contenedor.innerHTML += `<a class="movies" href ="movie.html?titulo=${movie.title}" > <img src= "${movie.poster}" class="img-movie" >
                                
                           </a>`
  
 });
 
  
 //document.querySelector('.movies').addEventListener('click', posterMovie);

 /*llamando array de titulos */

 var titulos = movies.map(function(titles) {
  return titles.title;

  
 });
 /*orden alfabetico*/
console.log("titulos", titulos.sort());

  /*filtrar imagenes de peliculas para mostrar*/
  search.addEventListener("keypress", (event) => {
    if(event.key == "Enter"){
    
     const result = filterData(movies, search.value);
      renderPosters(result);
      
    } 
    
    });

/* manipulacion del dom filter*/
const renderPosters = (result) => {
  contenedor.innerHTML = "";
  result.forEach(element => {
    contenedor.innerHTML += `<div class="movies"> <img src= "${element.poster}" class="img-movie" >
                                    <span class= "idMovie"> ${element.id} </span>
                              </div>`
  });


}




// import data from './data/lol/lol.js';
//import data from './data/ghibli/ghibli.js';

/*const API = './data/ghibli/ghibli.json/films';

fetch(API)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }); */