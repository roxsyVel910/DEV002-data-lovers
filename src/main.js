import {
  filterData,
  sortByTitleAsc,
  sortByTitleDesc,

} from './data.js';


import data from './data/ghibli/ghibli.js';




let contenedor = document.querySelector("#contenedor");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const search = document.querySelector("#search");
const iconoSort = document.querySelector(".sort");
const iconoSortDesc = document.querySelector(".sortDesc");
const directorName = document.querySelector(".director");
const productorName = document.querySelector(".producer");
const directorNameMovies = 'director';



console.log("productorrr", productorName.value);


/*filtrado de directores*/

directorName.addEventListener('change', () => {
  console.log('Me deben una cerveza', directorName.value)
  const changeDirectors = filterData(movies, directorName.value, directorNameMovies);
  renderDirectores(changeDirectors);
});

const renderDirectores = (changeDirectors) => {
  console.log("director", changeDirectors)

  contenedor.innerHTML = "";
  changeDirectors.forEach(elem => {
    contenedor.innerHTML += `<a class="movies" href ="movie?titulo=${elem.title}" > <img src= "${elem.poster}" class="img-movie" >
                                  
                             </a>`
  });
}

/*filtrado de productores */

productorName.addEventListener('change', () => {
 
  const filmsProductor = filterData(movies, productorName.value, "producer");
  renderProductores(filmsProductor);
})

const renderProductores = (filmsProductor) => {
  console.log("productor", filmsProductor)

  contenedor.innerHTML = "";
  filmsProductor.forEach(elem => {
    contenedor.innerHTML += `<a class="movies" href ="movie?titulo=${elem.title}" > <img src= "${elem.poster}" class="img-movie" >
                                  
                             </a>`
  });
}






iconMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle('activo');
}


/*llamando al todo el API de studios Gilbli*/
const movies = data.films

/* mostara poster de peliculas en el Dom*/
movies.forEach(movie => {

  contenedor.innerHTML += `<a class="movies" href ="movie?titulo=${movie.title}" > <img src= "${movie.poster}" class="img-movie" >
                                
                           </a>`

});



iconoSort.addEventListener('click', renderSortMenu)


function renderSortMenu() {
  const sortMovies = sortByTitleAsc(movies);
  renderSortMovie(sortMovies);
}

const renderSortMovie = (sortMovies) => {
  contenedor.innerHTML = "";

  sortMovies.forEach(elem => {


    contenedor.innerHTML += `<a class="movies" href ="movie?titulo=${elem.title}" > <img src= "${elem.poster}" class="img-movie" >
                                
                           </a>`

  });

}

iconoSortDesc.addEventListener('click', renderSortMenuDesc)


function renderSortMenuDesc() {
  const sortMoviesDesc = sortByTitleDesc(movies);
  renderSortMovieDesc(sortMoviesDesc);
}

const renderSortMovieDesc = (sortMoviesDesc) => {
  contenedor.innerHTML = "";

  sortMoviesDesc.forEach(elem => {


    contenedor.innerHTML += `<a class="movies" href ="movie?titulo=${elem.title}" > <img src= "${elem.poster}" class="img-movie" >
                                
                           </a>`

  });

}


/*orden alfabetico*/


/*filtrar imagenes de peliculas para mostrar*/
search.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {

    const result = filterData(movies, search.value, 'title');
    renderPosters(result);

  }

});

/* manipulacion del dom filter*/
const renderPosters = (result) => {
  contenedor.innerHTML = "";
  result.forEach(element => {
    contenedor.innerHTML += `<a class="movies" href ="movie?titulo=${element.title}" > <img src= "${element.poster}" class="img-movie" >
                                
                             </a>`
                             
  });

}

