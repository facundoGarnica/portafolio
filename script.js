// Obtener el modal
const modal = document.getElementById("modalImagen");
const modalImg = document.getElementById("imagenModal");
const cerrarModal = document.querySelector(".cerrar-modal");

// Obtener todas las imágenes con la clase "imagenes"
const imagenes = document.querySelectorAll(".imagenes");

// Agregar evento click a cada imagen
imagenes.forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        // Prevenir scroll del body cuando el modal está abierto
        document.body.style.overflow = "hidden";
    });
});

// Cerrar modal al hacer click en la X
cerrarModal.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

// Cerrar modal al hacer click fuera de la imagen
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// Cerrar modal con la tecla ESC
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});