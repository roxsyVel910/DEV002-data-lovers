// tratamos de filtara los poster por titulo


let contenedor = document.querySelector("#contenedor");

export const filterData = (dataMovie, condition) => {
  const campo = "title";
  return dataMovie.filter(movie => movie[campo].toLowerCase().includes(condition));

}


export const sortByTitle = (data) => {
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
 /* sortData(data, sortBy, sortOrder)*/



