
import { filterData } from '../src/data.js';

describe('filterData', ()=> {

  it('Deberia retornar 2 si sus argumentos son 1 y 1', ()=> {

    const arrExpected = [{'director': 'fer' }, {'director': 'fer'}, {'director': 'fer'}];

    const arrToTest = [{'director': 'fer' }, {'director': 'fer'}, {'director': 'fer'}, {'director': 'nico'}, {'director': 'rox'}];

    const resultado = filterData(arrToTest, 'fer', 'director');

    expect(resultado).toEqual(arrExpected);
  })

  it('No deberia retornar 2 si sus argumentos son 1 y 4', ()=> {
    const resultado = sumar(1, 4)

    expect(resultado).not.toBe(2)
  })
  // toContain, toEqual, toMatch, not
})


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
