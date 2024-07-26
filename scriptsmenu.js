document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Agua", descripcion: "Con o sin gas",imagen: "img/agua.jfif" },
        { nombre: "Gaseosa", descripcion: "Coca-cola, Fanta, 7up", imagen: "img/gaseosa.jfif" },
        { nombre: "Exprimido", descripcion: "De naranja fresca", imagen: "img/exprimido.jfif" },
        { nombre: "Licuado de fruta", descripcion: "Con fruta fresca de estacion", imagen: "img/licuado.jfif" },
        { nombre: "Batido de helado", descripcion: "Leche + Tu helado preferido", imagen: "img/batido.jfif" }
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
})

document.addEventListener("DOMContentLoaded", function() {
    const productos2 = [
        { nombre: "Café Americano", descripcion: "Café negro clásico",imagen: "img/cafe.jpg" },
        { nombre: "Latte", descripcion: "Café con leche espumada", imagen: "img/batido.jpg" },
        { nombre: "Capuchino", descripcion: "Café con leche y espuma", imagen: "img/alfajor.jpg" },
        { nombre: "Té Verde", descripcion: "Té saludable y refrescante", imagen: "img/cafe.jpg" },
        { nombre: "Pastel de Chocolate", descripcion: "Delicioso pastel de chocolate", imagen: "img/alfajor.jpg" }
    ];

    const productos2Container = document.getElementById("productos2");

    productos2.forEach((producto, index) => {
        const productoElement = document.createElement("div");
        productoElement.classList.add("producto");
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
        `;
        productos2Container.appendChild(productoElement);

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
})

document.addEventListener("DOMContentLoaded", function() {
    const productos3 = [
        { nombre: "Café Americano", descripcion: "Café negro clásico",imagen: "img/cafe.jpg" },
        { nombre: "Latte", descripcion: "Café con leche espumada", imagen: "img/batido.jpg" },
        { nombre: "Capuchino", descripcion: "Café con leche y espuma", imagen: "img/alfajor.jpg" },
        { nombre: "Té Verde", descripcion: "Té saludable y refrescante", imagen: "img/cafe.jpg" },
        { nombre: "Pastel de Chocolate", descripcion: "Delicioso pastel de chocolate", imagen: "img/alfajor.jpg" }
    ];

    const productos3Container = document.getElementById("productos3");

    productos3.forEach((producto, index) => {
        const productoElement = document.createElement("div");
        productoElement.classList.add("producto");
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
        `;
        productos3Container.appendChild(productoElement);

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
})


document.addEventListener("DOMContentLoaded", function() {
    const productos4 = [
        { nombre: "Café Americano", descripcion: "Café negro clásico",imagen: "img/cafe.jpg" },
        { nombre: "Latte", descripcion: "Café con leche espumada", imagen: "img/batido.jpg" },
        { nombre: "Capuchino", descripcion: "Café con leche y espuma", imagen: "img/alfajor.jpg" },
        { nombre: "Té Verde", descripcion: "Té saludable y refrescante", imagen: "img/cafe.jpg" },
        { nombre: "Pastel de Chocolate", descripcion: "Delicioso pastel de chocolate", imagen: "img/alfajor.jpg" }
    ];

    const productos4Container = document.getElementById("productos4");

    productos4.forEach((producto, index) => {
        const productoElement = document.createElement("div");
        productoElement.classList.add("producto");
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
        `;
        productos4Container.appendChild(productoElement);

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
})


document.addEventListener("DOMContentLoaded", function() {
    const productos5 = [
        { nombre: "Café Americano", descripcion: "Café negro clásico",imagen: "img/cafe.jpg" },
        { nombre: "Latte", descripcion: "Café con leche espumada", imagen: "img/batido.jpg" },
        { nombre: "Capuchino", descripcion: "Café con leche y espuma", imagen: "img/alfajor.jpg" },
        { nombre: "Té Verde", descripcion: "Té saludable y refrescante", imagen: "img/cafe.jpg" },
        { nombre: "Pastel de Chocolate", descripcion: "Delicioso pastel de chocolate", imagen: "img/alfajor.jpg" }
    ];

    const productos5Container = document.getElementById("productos5");

    productos5.forEach((producto, index) => {
        const productoElement = document.createElement("div");
        productoElement.classList.add("producto");
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
        `;
        productos5Container.appendChild(productoElement);

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
})



