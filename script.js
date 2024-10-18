document.getElementById('boton').addEventListener('click', function() {
  var carta = document.getElementById('carta');
  carta.style.display = 'block';
  setTimeout(function() {
    carta.classList.add('show');  // Añade la clase "show" para activar el desvanecimiento
  }, 10);  // Pequeño retraso para activar la transición
});
