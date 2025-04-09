let sliderInterval;
let idleTimeout;

const sliderElement = document.querySelector(".slider"); // Contenedor del slider
const slides = document.querySelectorAll(".slides");
let isTransitioning = false;

// Función para mover el slider
function fntExecuteSlide(direction) {
    if (isTransitioning) return;
    isTransitioning = true;

    if (direction === "next") {
        let firstSlide = sliderElement.firstElementChild;
        firstSlide.classList.add("slide-out");

        setTimeout(() => {
            sliderElement.appendChild(firstSlide);
            firstSlide.classList.remove("slide-out");
            isTransitioning = false;
        }, 500);
    } else if (direction === "prev") {
        let lastSlide = sliderElement.lastElementChild;
        sliderElement.insertBefore(lastSlide, sliderElement.firstElementChild);
        lastSlide.classList.add("slide-in");

        setTimeout(() => {
            lastSlide.classList.remove("slide-in");
            isTransitioning = false;
        }, 500);
    }
}

// Función para iniciar el autoplay
function startSlider() {
    stopSlider(); // Detiene cualquier autoplay en ejecución
    sliderInterval = setInterval(() => {
        fntExecuteSlide("next");
    }, 5000);
}

// Función para detener el autoplay
function stopSlider() {
    clearInterval(sliderInterval);
}

// Función para reiniciar el autoplay después de inactividad
function resetIdleTimeout() {
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => {
        console.log("🔄 Reiniciando autoplay...");
        startSlider();
    }, 3000); // **Ahora se reiniciará después de 3 segundos**
}

// Iniciar el slider al cargar la página
if (sliderElement) {
    startSlider();

    // Pausar autoplay cuando el usuario pase el mouse
    sliderElement.addEventListener("mouseover", stopSlider);

    // Reiniciar autoplay cuando el usuario retire el mouse
    sliderElement.addEventListener("mouseout", resetIdleTimeout);
}

// Botones de navegación
document.querySelector(".prev").addEventListener("click", () => {
    fntExecuteSlide("prev");
    stopSlider();
    resetIdleTimeout();
});

document.querySelector(".next").addEventListener("click", () => {
    fntExecuteSlide("next");
    stopSlider();
    resetIdleTimeout();
});



document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        { nombre: "Bebidas", descripcion: "", imagen: "img/aguaa.jfif" },
        { nombre: "Cafeteria", descripcion: "", imagen: "img/cafeteria.jfif" },
        { nombre: "Dulce", descripcion: "", imagen: "img/dulce.jfif" },
        { nombre: "Salado", descripcion: "", imagen: "img/scones.jfif" },
        { nombre: "Helados", descripcion: "", imagen: "img/balcarce.jfif" }
    ];

    const productosContainer = document.getElementById("productos");

    productos.forEach((producto, index) => {
        const productoElement = document.createElement("div");
        productoElement.classList.add("producto");
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
        `;
        productosContainer.appendChild(productoElement);

        // Animación para mostrar los productos con retraso
        setTimeout(() => {
            productoElement.classList.add("show");
        }, index * 200);
    });


    Container = document.getElementById("productos");

    // Crear un IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);  // Dejar de observar el elemento una vez que esté visible
            }
        });
    }, { threshold: 1 });  // El umbral es del 100%



    // Crear un IntersectionObserver para la sección de ubicación
    const ubicacionElement = document.querySelector('.ubicacion');
    const ubicacionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);  // Dejar de observar el elemento una vez que esté visible
            }
        });
    }, { threshold: 1 });  // El umbral es del 100%

    // Observar el elemento de la ubicación
    ubicacionObserver.observe(ubicacionElement);

});

document.addEventListener("DOMContentLoaded", function () {
    const productos = document.querySelectorAll('.producto');
    const ubicacion = document.querySelector('.ubicacion');
    const historia = document.querySelector('.historia');

    const mostrarElementos = (elementos) => {
        const triggerBottom = window.innerHeight / 5 * 4;

        elementos.forEach(elemento => {
            const boxTop = elemento.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                elemento.classList.add('show');
            }
        });
    };

    const mostrarUbicacion = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        if (ubicacion.getBoundingClientRect().top < triggerBottom) {
            ubicacion.classList.add('show');
        }
    };

    const mostrarHistoria = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        if (historia.getBoundingClientRect().top < triggerBottom) {
            historia.classList.add('show');
        }
    };

    window.addEventListener('scroll', () => {
        mostrarElementos(productos);
        mostrarUbicacion();
        mostrarHistoria();
    });

    mostrarElementos(productos);
    mostrarUbicacion();
    mostrarHistoria();
});

document.addEventListener("DOMContentLoaded", function () {
    const historiaContainer = document.querySelector('.historia-container');
    const historia = document.querySelector('.historia');
    const historiaTexto = document.querySelector('.historia-texto');
    const historiaImagenes = document.querySelectorAll('.historia-imagen');

    const mostrarHistoria = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        if (historiaContainer.getBoundingClientRect().top < triggerBottom) {
            historia.classList.add('show');
            historiaTexto.style.opacity = '1';
            historiaTexto.style.animation = 'slideInRight 1s ease-in-out forwards';
            historiaImagenes.forEach(imagen => {
                imagen.style.opacity = '1';
                imagen.style.animation = 'slideInLeft 1s ease-in-out forwards';
            });
        }
    };

    window.addEventListener('scroll', mostrarHistoria);
    mostrarHistoria();
});

document.addEventListener("DOMContentLoaded", function () {
    const tituloHistoria = document.querySelector('.titulo-historia');
    const historia = document.querySelector('.historia');
    const historiaTexto = document.querySelector('.historia-texto');
    const historiaImagenes = document.querySelectorAll('.historia-imagen');

    const mostrarElemento = (elemento) => {
        const triggerBottom = window.innerHeight / 5 * 4;

        if (elemento.getBoundingClientRect().top < triggerBottom) {
            elemento.classList.add('show');
        }
    };

    const mostrarHistoria = () => {
        mostrarElemento(tituloHistoria);
        mostrarElemento(historia);
        mostrarElemento(historiaTexto);
        historiaImagenes.forEach(imagen => mostrarElemento(imagen));
    };

    window.addEventListener('scroll', mostrarHistoria);
    mostrarHistoria(); // Para verificar si están en vista al cargar la página
});



//Aparicion dinamica de las secciones
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visibleThreshold = 150;

        if (elementTop < windowHeight - visibleThreshold) {
            el.classList.add('active');
        } else {
            el.classList.remove('active'); // opcional: si quieres que desaparezcan al salir
        }
    });
}

// Ejecutar en scroll y al cargar
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

