

import  { filterData }  from './data.js';

import data from './data/ghibli/ghibli.js';

let contenedor = document.querySelector("#contenedor");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const search = document.querySelector("#search");
mobileMenu.classList.remove('activo');

let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 2;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}

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
  console.log("locacione",movie.locations)

  contenedor.innerHTML += `<div class="movies"> <img src= "${movie.poster}" class="img-movie" > </div>`
    
 });
 /*llamando array de titulos */

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
  search.addEventListener("keypress", (event) => {
    if(event.key == "Enter"){
    
      filterData(movies, search.value)
      
      
    } 
    
    });

  






// import data from './data/lol/lol.js';
//import data from './data/ghibli/ghibli.js';

/*const API = './data/ghibli/ghibli.json/films';
import data from './data/rickandmorty/rickandmorty.js';


fetch(API)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }); */

