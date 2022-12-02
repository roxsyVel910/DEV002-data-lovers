// tratamos de filtara los poster por titulo
let contenedor = document.querySelector("#contenedor");

export const filterData = (dataMovie, condition) =>{
  const campo = "title";
  return dataMovie.filter(movie => movie[campo].toLowerCase().includes(condition));
  

  }

 

