

// Arreglos en JS 
//const arreglo = new Array(10);
const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5];

console.log(arreglo);
console.log(arreglo2);

const arreglo3 = arreglo2.map(posicion => {
  console.log(posicion);
  return posicion;
});

console.log(arreglo3);