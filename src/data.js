// tratamos de filtara los poster por titulo
let contenedor = document.querySelector("#contenedor");
export const filterData = (dataMovie, condition) =>{
  
  let result = dataMovie.filter(movie => movie.title.toLowerCase().includes(condition));
  
  result.forEach(element => {
    contenedor.innerHTML += `<div class="movies"> <img src= "${element.poster}" class="img-movie" > </div>`
  });
 


 
// lowercase
  /*var titulos = dataMovie.map(function(titles) {
    return titles.title || titles.poster;
    console.log(titulos);
   });

  return titulos.filter(movie => {
    return movie.includes(condition)
    
  })*/
  }

 

