// tratamos de filtara los poster por titulo

export const filterData = (dataMovie, condition, campo) => {
  
  return dataMovie.filter(movie => movie[campo].toLowerCase().includes(condition.toLowerCase()));

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

    


 export const computeStatsMale = (data) => {
 
  return data.filter((character) => character.gender == "Male").length;
  
}

export const computeStatsFemale = (data) => {

    return data.filter((character) => character.gender == "Female").length;
  }

