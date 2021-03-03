
// Desestructuracion

//Asignacion desestructurante 
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  latlng: {
    lat: 14.1232,
    lng: -12.3232
  }
};


const retornaPersona = (usuario) => {
  const {nombre, edad, clave} = usuario;
  console.log(usuario);
  console.log(nombre);
  console.log(edad);
  console.log(clave);
}

retornaPersona(persona);

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3] = personajes;

console.log(p3);