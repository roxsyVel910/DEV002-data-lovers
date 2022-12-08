import  { filterData }  from './data.js';
import data from './data/ghibli/ghibli.js';
const descripcionMovieSelct = document.querySelector(".description-movie");  
 const titleMovie = document.querySelector('.titleMovie');  
 const characteres = document.querySelector('.avatar-personajes');
 const modal = document.getElementById("myModal");
 const showModal = document.querySelector(".modal-content");

 

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

/*manipulación DOM  descripción de peliculas*/

console.log("lugardd" , movieData.locations);


const person = movieData.people;
person.forEach(element => {
    characteres.innerHTML += ` <div class="avatar"> <img
                                src="${element.img}" alt="">
                                <p>${element.name}</p>
                            </div>`
        console.log("personajes",element);
    
 const avatClick =  document.querySelector(".avatar");
 avatClick.addEventListener('click', showModalCharacter)
 showModal.innerHTML = `
 <img src=" ${element.img}" class="avatar2" >
 <h1>${element.name}</h1>
 <br>
 <h2>Especie</h2>
 <p>${element.specie}</p>
 <h2>Edad</h2>
 <p>${element.age} </p>
 <h2>Genero</h2>
 <p>${element.gender} </p>`




 
  
});

// EL BOTON ABRE EL MODAL
//var btn = document.getElementById("myBtn");

// EL ELEMENTO SPAN CIERRA EL MODAL 
var span = document.getElementsByClassName("close")[0];

function showModalCharacter(){
   modal.style.display = "block";

}

    

// CUANDO EL USUARIO HACE CLICK Y ABRE EL MODAL


// Cuando usuarix haga click en <span> (x), cierre modal 
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga click fuera del modal, se cierre
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }




};






