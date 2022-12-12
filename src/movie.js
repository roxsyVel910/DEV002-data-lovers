import { filterData,
    computeStatsMale,
    computeStatsFemale ,
} from './data.js';
import data from './data/ghibli/ghibli.js';
const titleMovie = document.querySelector('.titleMovie');
const characteres = document.querySelector('.avatar-personajes');
const modal = document.getElementById("myModal");
const showModal = document.querySelector(".modal-content");


const posterMovies = document.querySelector('.profile-pic');
const mainbackground = document.querySelector('.form_director');
const vehiclesContainer = document.querySelector('.vehiculos-container');
const containerLocacion = document.querySelector('.locaciones-contenedor');
const promedio = document.querySelector('.promedio');




const movies = data.films


const queryString = window.location.search;


const params = new URLSearchParams(queryString);



const titleMov = params.get('titulo')


const movieData = filterData(movies, titleMov, 'title')[0];

titleMovie.innerHTML += `<h1 class="nowrap">${movieData.title}</h1>
                        <p class="description-movie">${movieData.description}</p>`;
posterMovies.innerHTML = `<img src="${movieData.poster} ">`;
mainbackground.innerHTML += `  <div class="form_ranking">

                                    <label class="label-ranking" for="ranking">${movieData.rt_score}<img src="./img/star.png" alt="estrella"></label>
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




/*manipulación DOM  descripción de peliculas*/



const person = movieData.people;
person.forEach(element => {
    characteres.innerHTML += ` <div class="avatar"> <img
                                src="${element.img}" alt="${element.name}">
                                <p>${element.name}</p>
                            </div>`
});
/*promedio de genero*/
const hombre  = computeStatsMale(person)
const mujer = computeStatsFemale(person)
console.log("mujer", mujer, hombre);
promedio.innerHTML += `<h2> GENERO DE PERSONAJES<h3>
                        <h3> Total de hombres : ${hombre} </h3>
                        <h3> Total de Mujeres: ${mujer} </h3>`



const avatClick = document.querySelectorAll(".avatar");
avatClick.forEach(personaje => {
    personaje.addEventListener('click', (event) => {
        const personajeActual = filterData(person, event.target.alt, 'name')
        showModalCharacter(personajeActual[0]);
    });
});



const locacion = movieData.locations;
locacion.forEach(city => {
    containerLocacion.innerHTML += `<div class="contenido-locacion">
                                    <img src="${city.img}" alt="">
                                    <div>
                                        <h2>${city.name}</h2>
                                    </div>
                                </div>`

});

var span = document.getElementsByClassName("close")[0];

function showModalCharacter(element) {

    modal.style.display = "block";

    showModal.innerHTML = `
                        <img src="${element.img}" class="avatar2"> <br>
                        <h2>${element.name}</h2> <br>
                        <h2>${element.specie}</h2><br>
                        <h2>${element.age} </h2><br>
                        <h2>${element.gender} </h2><br>`
                    
}



// CUANDO EL USUARIO HACE CLICK Y ABRE EL MODAL


// Cuando usuarix haga click en <span> (x), cierre modal 
span.onclick = function () {
    modal.style.display = "none";
}

// Cuando el usuario haga click fuera del modal, se cierre
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//promedio








