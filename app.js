var botonInfo = document.getElementById('info_b');
var botonContact = document.getElementById('contact_b');
var botonProyect = document.getElementById('proyect_b');
var contenedor = document.getElementById('cont_main');

function cambiarContenido(nuevoContenido) {
    contenedor.innerHTML = nuevoContenido;
    if (contenedor.classList.contains('animate')) {
        contenedor.classList.remove('animate');
      }
      void contenedor.offsetWidth;
      contenedor.classList.add('animate');
}

botonInfo.addEventListener("click", function (){
    cambiarContenido('<a href="https://cs.ucsp.edu.pe/">Estudios actuales: Ciencias de la computación</a> <br><a href="https://csj.edu.pe/">Estudios primarios: Colegio San José</a><br><a href="https://www.muniarequipagob.pe/">Ciudad: Arequipa, Perú</a><br><a href="https://github.com/GebUCSP"> Github: GebUCSP </a>');
});

botonContact.addEventListener("click", function (){
    cambiarContenido('<a href="mailto:jose.cornejo.castro@ucsp.edu.pe">Correo: jose.cornejo.castro@ucsp.edu.pe</a><br><br><a href="tel:+51991357008"> Teléfono: 991357008 </a>');
});

botonProyect.addEventListener("click", function (){
    cambiarContenido('<a href="https://github.com/GebUCSP/VJ2023-S2">Videojuego C++ con CMake:</a><p>Se desarrollo un videojuego de boxeo como proyecto de segundo semestre</p><a href="https://github.com/GebUCSP/PORTAFOLIO_2023">Portafolio UCSP:</a><p>El portafolio web diseñado como una pagina web para probar el algoritmo "Web Ranking"</p>');
});
