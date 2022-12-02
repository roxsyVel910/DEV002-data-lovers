import  { filterData }  from './data.js';
import data from './data/ghibli/ghibli.js';
const descripcionMovieSelct = document.querySelector(".description-movie");  
 const titleMovie = document.querySelector('.titleMovie');  
 const characteres = document.querySelector('.avatar-personajes');

 

const movies = data.films
 

const queryString = window.location.search;
console.log("parametros",queryString);


const params = new URLSearchParams(queryString);
console.log("params", params);



const titleMov = params.get('titulo')


const movieData = filterData(movies, titleMov.toLowerCase())[0];
console.log(" ksajdoisdfhsoid",movieData)

descripcionMovieSelct.innerHTML = `<p>${movieData.description}</p>`;
titleMovie.innerHTML += `<span class="nowrap">${movieData.title}</span>`;

/*manipulacion dom  descripcon de peliculas*/

console.log("lugardd" , movieData.locations);


const person = movieData.people;
person.forEach(element => {
    characteres.innerHTML += ` <div class="avatar"> <img
                                src="${element.img}" alt="">
                                <p>${element.name}</p>
                            </div>`
        console.log("personajes",element);
    
});



