

/*
const getImagenPromesa = () => new Promise(resolve => resolve
  ('https://media4.giphy.com/media/cIfiRWxIr4ZyXGiiFL/giphy-hd.mp4?cid=f18a8f9b1c3621901a6259712eb5e9c92a97436f7580d03a&rid=giphy-hd.mp4')
)

getImagenPromesa()
  .then(console.log);

*/

const getImage = async () => {

  try{
    const apiKey = 'eUjP98P63gJOtf5ZS6lswbhD5dKlnl8b';
    const peticion = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const respuesta = await peticion.json();
    
    // Obtener la url de la respuesta con destructuring
    const {url} = respuesta.data.images.original;
    
    // Crear una imagen en el documento
    const img = document.createElement('img');
    img.src = url;
  
    document.body.append(img);
  }catch(err){
    console.log(err);
  }

}

getImage();

/*


peticion
  .then(respuesta => respuesta.json())
  .then(({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn)

*/
