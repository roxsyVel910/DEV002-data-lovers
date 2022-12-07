import { filterData } from './data.js';
import data from './data/ghibli/ghibli.js';

const titleMovie = document.querySelector('.titleMovie');
const characteres = document.querySelector('.avatar-personajes');
const posterMovies = document.querySelector('.profile-pic');
const mainbackground = document.querySelector('.form_director');
const vehiclesContainer = document.querySelector('.vehiculos-container');
const containerLocacion = document.querySelector('.locaciones-contenedor');




const movies = data.films


const queryString = window.location.search;
console.log("parametros", queryString);


const params = new URLSearchParams(queryString);
console.log("params", params);



const titleMov = params.get('titulo')


const movieData = filterData(movies, titleMov.toLowerCase())[0];
console.log(" ksajdoisdfhsoid", movieData)

titleMovie.innerHTML += `<h1 class="nowrap">${movieData.title}</h1>
                        <p class="description-movie">${movieData.description}</p>`;
posterMovies.innerHTML = `<img src="${movieData.poster} ">`;
mainbackground.innerHTML += `  <div class="form_ranking">

                                    <label class="label-ranking" for="ranking">${movieData.rt_score}</label>
                                </div>

                                <div class="form_año">
                                    <label class="label-director" for="director">${movieData.director}</label>
                                </div>
                                <div class="form_año">
                                    <label class="label-director" for="director">${movieData.producer}</label>
                                </div>

                                <div class="form_año">
                                    <label class="label-anio" for="año">${movieData.release_date}</label>
                                </div> `;

                                                    


/*manipulacion dom  descripcon de peliculas*/

console.log("lugardd", movieData.locations);


const person = movieData.people;
person.forEach(element => {
    characteres.innerHTML = ` <div class="avatar"> <img
                                src="${element.img}" alt="${element.name}">
                                <p>${element.name}</p>
                            </div>`
    console.log("personajes", element);

});

const vehiculos = movieData.vehicles;
vehiculos.forEach(car => {
    vehiclesContainer.innerHTML = `<div class="img-vehiculo">
                                    <img src="${car.img}" alt="">
                                    </div>
                                    <div class="descripcion-vehiculo">
                                    <p>${car.name}</p>
                                    </div>`
                                    
                                
                                });  
const locacion = movieData.locations;
locacion.forEach(city => {
    containerLocacion.innerHTML += `<div class="contenido-locacion">
                                    <img src="${city.img}" alt="">
                                    <div>
                                        <h2>${city.name}</h2>
                                    </div>
                                </div>`

})




