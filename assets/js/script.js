console.log("Conectado")
// Esperar a que el contenido del DOM esté completamente cargado

@media only screen and (max-width: 480px){
  .sm-0 {
      /* no imprimirá nada con la clase .sm-0 si el ancho de la pantalla es menor a 480px */
      display: none;
   }
}
@media only screen and (min-width: 481px){
  .med-1 {
      /* todo de clase.med-1 obtendrá el 25% del ancho disponible, si el ancho de la pantalla es mayor a 480px */
      width: 25%;
  }
}


document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll(".miVideo");
  
    // Función para reproducir el video cuando pasa el mouse sobre él
    function reproducirVideo() {
      this.play();
    }
  
    // Función para pausar el video cuando se retira el mouse del mismo
    function pausarVideo() {
      this.pause();
    }
  
    // Mostrar los videos al cargar el contenido
    videos.forEach(function(video) {
      video.style.display = "block";
  
      // Evento para reproducir el video al pasar el mouse sobre él
      video.addEventListener("mouseenter", reproducirVideo);
  
      // Evento para pausar el video al salir el mouse del mismo
      video.addEventListener("mouseleave", pausarVideo);
    });
  });



// Conteo Likes video 1
document.addEventListener('DOMContentLoaded', () => {
    const botonLike = document.getElementById('boton-like1');
    const conteoLikesElement = document.getElementById('conteo-likes1');
    let conteoLikes1 = 0;
    botonLike.addEventListener('click', () => {
        conteoLikes1++;
        conteoLikesElement.textContent = `${conteoLikes1} likes`;
    });
});

// Conteo Likes video 2
document.addEventListener('DOMContentLoaded', () => {
  const botonLike = document.getElementById('boton-like2');
  const conteoLikesElement = document.getElementById('conteo-likes2');
  let conteoLikes2 = 0;
  botonLike.addEventListener('click', () => {
      conteoLikes2++;
      conteoLikesElement.textContent = `${conteoLikes2} likes`;
  });
});


// Conteo Likes video 3
document.addEventListener('DOMContentLoaded', () => {
  const botonLike = document.getElementById('boton-like3');
  const conteoLikesElement = document.getElementById('conteo-likes3');
  let conteoLikes3 = 0;
  botonLike.addEventListener('click', () => {
      conteoLikes3++;
      conteoLikesElement.textContent = `${conteoLikes3} likes`;
  });
});




