// MENÚ ACTIVO SEGÚN LA PÁGINA ACTUAL
const enlacesNav = document.querySelectorAll("nav a");
const paginaActual = window.location.pathname.split("/").pop();

enlacesNav.forEach(link => {
    if (link.getAttribute("href") === paginaActual) {
        link.classList.add("activo");
    }
});

// ACORDEÓN (usado en filosofia.html)
const botonesAcordeon = document.querySelectorAll(".acordeon");

botonesAcordeon.forEach(boton => {
    boton.addEventListener("click", () => {
        const panel = boton.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});
// LIGHTBOX: ampliar imágenes al hacer clic
const modalImagen = document.getElementById("modal-imagen-ampliada");
const imagenAmpliada = document.getElementById("imagen-ampliada-contenido");

document.querySelectorAll(".img-ampliable").forEach(img => {
    img.addEventListener("click", () => {
        imagenAmpliada.src = img.src;
        imagenAmpliada.alt = img.alt;
        modalImagen.style.display = "flex";
    });
});

if (modalImagen) {
    modalImagen.addEventListener("click", () => {
        modalImagen.style.display = "none";
    });
}

