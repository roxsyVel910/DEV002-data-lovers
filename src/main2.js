import data from './data/ghibli/ghibli.js';

const movies = data.films
 console.log(movies);

  /*mostara poster de peliculas en el Dom*/
 movies.map(movie => {
    console.log(movie.locations)
   
  

  //contenedor.innerHTML += `<div class="movies"> <img src= "${movie.poster}" class="img-movie" > </div>`
    
 }); 

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

