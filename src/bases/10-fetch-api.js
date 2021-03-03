

const apiKey = 'eUjP98P63gJOtf5ZS6lswbhD5dKlnl8b';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
  .then(respuesta => respuesta.json())
  .then(({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn)