const nombre = 'Fernando';
const apellido = 'Herrera';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

// Funcion saludar 
function getSaludo(nombre) {
  return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)