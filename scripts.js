document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Café", descripcion: "",imagen: "img/cafe.jpg" },
        { nombre: "Batidos", descripcion: "", imagen: "img/batido.jpg" },
        { nombre: "Alfajores", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Té Verde", descripcion: "Té saludable y refrescante", imagen: "img/cafe.jpg" },
        { nombre: "Pastel de Chocolate", descripcion: "Delicioso pastel de chocolate", imagen: "img/alfajor.jpg" }
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

document.addEventListener("DOMContentLoaded", function() {
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

document.addEventListener("DOMContentLoaded", function() {
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

document.addEventListener("DOMContentLoaded", function() {
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


