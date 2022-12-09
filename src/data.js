// tratamos de filtara los poster por titulo


let contenedor = document.querySelector("#contenedor");

export const filterData = (dataMovie, condition, campo) => {
  
  return dataMovie.filter(movie => movie[campo].toLowerCase().includes(condition));

}



export const filterCharacter = (data, condition) => {
  const campo = "name";
  
  return data.filter(movie => movie[campo] === condition);

}

//arr= []
export const sortByTitleAsc = (data) => {
  return data.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  });
  // [{title: 'abc'},{title: 'zyc'},{}]

}
export const sortByTitleDesc = (data) => {
  return data.sort(function (a, b) {
    if (a.title > b.title) {
      return -1;
    }
    if (a.title < b.title) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  });
  // [{title: 'abc'},{title: 'zyc'},{}]

}
 /* sortData(data, sortBy, sortOrder)*/


