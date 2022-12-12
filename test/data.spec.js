
import { filterData,
  sortByTitleAsc,
  sortByTitleDesc,
  computeStatsMale ,
  computeStatsFemale
  
} from '../src/data.js';

const data = {
 films: [
   {
     "id": "f1",
     "title": "Castle in the Sky",
     "director": "Hayao Miyazaki",
     "producer": "Isao Takahata",
   },
   {
     "id": "f2",
     "title": "My Neighbor Totoro",
     "director": "Hayao Miyazaki",
     "producer": "Hayao Miyazaki",
   },
   {
     "id": "f3",
     "title": "Kiki's Delivery Service",
     "director": "Hayao Miyazaki",
     "producer": "Hayao Miyazaki",

   },
   {
     "id": "f4",
     "title": "Grave of the Fireflies",
     "director": "Isao Takahata",
     "producer": "Toru Hara",
   }
 ],
 people: [
   {
     "id": "p1",
     "name": "Porco Rosso",
     "gender": "Male",
     "specie": "Human"
   },
   {
     "id": "p2",
     "name": "Donald Curtis",
     "gender": "Male",
     "specie": "Human"
   },
   {
     "id": "p3",
     "name": "Fio Piccolo",
     "gender": "Female",
     "specie": "Human"
   },
   {
     "id": "p3",
     "name": "Gina",
     "gender": "Female",
     "specie": "Human"
   },
   {
     "id": "p4",
     "name": "Mr. Piccolo",
     "gender": "Male",
     "specie": "Human"
   },
   {
     "id": "p5",
     "name": "Capo",
     "gender": "Male",
     "specie": "Human"
   }
 ],
}




const arrExpected = [{ "id": "f1",
"title": "Castle in the Sky",
"director": "Hayao Miyazaki",
"producer": "Isao Takahata", },
{ "id": "f2",
"title": "My Neighbor Totoro",
"director": "Hayao Miyazaki",
"producer": "Hayao Miyazaki", }, 
{  "id": "f3",
"title": "Kiki's Delivery Service",
"director": "Hayao Miyazaki",
"producer": "Hayao Miyazaki" }];

const arrExpectedAsc = [
  {
    "id": "f1",
     "title": "Castle in the Sky",
     "director": "Hayao Miyazaki",
     "producer": "Isao Takahata",
  },
  {
    "id": "f4",
     "title": "Grave of the Fireflies",
     "director": "Isao Takahata",
     "producer": "Toru Hara",
  },
  {
    "id": "f3",
    "title": "Kiki's Delivery Service",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",

  },
  {
    "id": "f2",
     "title": "My Neighbor Totoro",
     "director": "Hayao Miyazaki",
     "producer": "Hayao Miyazaki",
  }
];
const arrExpectedDesc = [
 
  
  {
    "id": "f2",
     "title": "My Neighbor Totoro",
     "director": "Hayao Miyazaki",
     "producer": "Hayao Miyazaki",
  },
  {
    "id": "f3",
    "title": "Kiki's Delivery Service",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",

  },
  {
    "id": "f4",
     "title": "Grave of the Fireflies",
     "director": "Isao Takahata",
     "producer": "Toru Hara",
  },
  {
    "id": "f1",
     "title": "Castle in the Sky",
     "director": "Hayao Miyazaki",
     "producer": "Isao Takahata",
  }
];

const arrExpectedMale = 4;
const arrExpectedFemale = 2;

describe('filterData', () => {

 it('Deberia un array de objetos con el nombre del director filtrado', () => {

   const resultado = filterData(data.films, 'Hayao Miyazak', 'director');
   expect(resultado).toEqual(arrExpected);
 })
})




describe('sortByTitleAsc ', () => {

  it('Nombre de Peliculas de forma Ascendente', () => {
 
    const resultado = sortByTitleAsc(data.films);
    expect(resultado).toEqual(arrExpectedAsc);
  })
 
 })

 describe('sortByTitleDesc ', () => {

  it('Nombre de Peliculas de forma Descendente', () => {
 
    const resultado = sortByTitleDesc(data.films);
    expect(resultado).toEqual(arrExpectedDesc);
  })
 
 })

 describe('computeStatsMale', () => {

  it('Existen 4 personajes Hombre ', () => {
 
    const resultado = computeStatsMale(data.people);
    expect(resultado).toEqual(arrExpectedMale);
  })
 
 })
 describe('omputeStatsFemale', () => {

  it('Existen 1 personaje mujer', () => {
 
    const resultado = computeStatsFemale(data.people);
    expect(resultado).toEqual(arrExpectedFemale);
  })
 
 })



