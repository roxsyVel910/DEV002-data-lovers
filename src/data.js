// tratamos de filtara los poster por titulo

/**
 * TODO: JSDOC
 * @param {*} dataMovie 
 * @param {*} condition 
 * @param {*} cambiar 
 * @returns 
 */
export const filterData = (dataMovie, condition, cambiar) => {
  return dataMovie.filter(movie => movie[cambiar].toLowerCase().includes(condition.toLowerCase()));
}


// TODO: procurar eliminar esta funcion
export const filterCharacter = (data, condition) => {
  const campo = "name";

  return data.filter(movie => movie[campo] === condition);
}

//TODO: agregar dos parametros, como esta en el readme
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

// TODO: procurar eliminar esta funcion
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
