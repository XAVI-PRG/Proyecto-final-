/**<!-- JS PARA CARRUSEL -->**/
let index = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(i) {
    slides.forEach(sl => sl.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

/* Auto-play */
setInterval(nextSlide, 4000);

/* Menú móvil */
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
// FORMULARIO CON MENSAJE DE ÉXITO
document.getElementById("formContacto").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita recargar la página

    // Limpia el formulario
    this.reset();

    // Mostrar mensaje de éxito
    const mensaje = document.getElementById("mensajeExito");
    mensaje.style.display = "block";

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
        mensaje.style.display = "none";
    }, 5000);
});