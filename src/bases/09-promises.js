import {getHeroeById} from './bases/08-imp-exp';

/*
const promesa = new Promise((resolve, reject) => {
  setTimeout(()=> {
    const heroe = getHeroeById(2);
    try{
      resolve(heroe);
    }catch(err){
      reject('No se pudo encontrar el heroe', err.message);
    }
  }, 2000)
});

promesa.then((heroe) => {
  console.log('heroe', heroe);
})
.catch(err => console.warn(err));
*/

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    const p1 = getHeroeById(id);
    if(p1){
      resolve(p1);
    }else{
      reject('No se pudo encontrar al héroe')
    }
  })
}

getHeroeByIdAsync(4)
  .then(console.log)
  .catch(console.warn)