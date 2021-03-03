// Funciones en js 
function saludar(nombre) {
  return `Hola, ${nombre}`;
};

console.log(saludar('Victor'));

//Funciones de flecha 
const saludo = (nombre) => {
  return `Hola, ${nombre}`;
};

console.log(saludo('Fatima'));

const getUser = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502'
});

console.log(getUser());

// Tarea 
const getUsuarioActivo = nombre => ({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);