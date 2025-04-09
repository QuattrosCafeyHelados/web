document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Agua", descripcion: "",imagen: "img/aguaa.jfif" },
        { nombre: "Gaseosa", descripcion: "",imagen: "img/gaseosas.jfif" },
        { nombre: "Agua saborizada", descripcion: "", imagen: "img/aquariusvera.jfif" },
        { nombre: "Exprimido", descripcion: "", imagen: "img/exprimido.jfif" },
        { nombre: "Licuados", descripcion: "", imagen: "img/licuado.jfif" },
        { nombre: "Batido de helado", descripcion: "", imagen: "img/batido.jfif" }
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
        { nombre: "Expresso", descripcion: "",imagen: "img/espresso.jfif" },
        { nombre: "Americano", descripcion: "", imagen: "img/americano.jfif" },
        { nombre: "Cortado", descripcion: "", imagen: "img/cortado.jfif" },
        { nombre: "Cortado doble", descripcion: "", imagen: "img/cortado-doble.jfif" },
        { nombre: "Café con leche", descripcion: "",imagen: "img/cafe-con-leche.jfif" },
        { nombre: "Lagrima", descripcion: "", imagen: "img/lagrima.jfif" },
        { nombre: "Lagrima doble", descripcion: "", imagen: "img/lagrima-doble.jfif" },
        { nombre: "Capuccino", descripcion: "", imagen: "img/capuccino.jfif" },
        { nombre: "Submarino", descripcion: "", imagen: "img/submarino.jfif" },
        { nombre: "Affogato", descripcion: "",imagen: "img/affogato.jfif" },
        { nombre: "Café frappe", descripcion: "", imagen: "img/cafe-frappe.jfif" },
        { nombre: "Té", descripcion: "", imagen: "img/te.jfif" },
        { nombre: "Vaso de leche", descripcion: "", imagen: "img/leche.jfif" },
        { nombre: "Leche de almendras", descripcion: "", imagen: "img/leche-de-almendras.jfif" },
        { nombre: "Crema", descripcion: "", imagen: "img/crema.jfif" }
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
        { nombre: "Medialuna", descripcion: "",imagen: "img/medialunas.jpeg" },
        { nombre: "Alfajor", descripcion: "", imagen: "img/alfajores.jpeg" },
        { nombre: "Alfajor de maicena", descripcion: "", imagen: "img/alfajoresdmaicena.jfif" },
        { nombre: "Cookies", descripcion: "", imagen: "img/cookies.jpeg" },
        { nombre: "Cocadas", descripcion: "", imagen: "img/cocardos.jpeg" },
        { nombre: "Muffins", descripcion: "",imagen: "img/muffins.jpeg" },
        { nombre: "Porcion de budin", descripcion: "", imagen: "img/budin.jpeg" },
        { nombre: "Brownie", descripcion: "", imagen: "img/brownie.jpeg" },
        { nombre: "Pastafrola", descripcion: "", imagen: "img/pastrafrola-porcion.jfif" },
        { nombre: "Tarta de coco", descripcion: "", imagen: "img/tartadecoco.jpeg" },
        { nombre: "Crumble manzana", descripcion: "", imagen: "img/crumble.jpeg" }
        
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
        { nombre: "Medialuna", descripcion: "",imagen: "img/medialungas.jfif" },
        { nombre: "Tostado de miga", descripcion: "", imagen: "img/tostados.jfif" },
        { nombre: "Porcion de tostadas", descripcion: "", imagen: "img/tostadas.jfif" },
        { nombre: "Sanguche focaccia", descripcion: "", imagen: "img/focacciacrudo.jfif" },
        { nombre: "Sanguche de Scon", descripcion: "", imagen: "img/sangu-de-scon.jfif" },
        { nombre: "Scones de queso", descripcion: "", imagen: "img/scons.jpeg" }
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
        { nombre: "Americana", descripcion: "",imagen: "img/cafe.jpg" },
        { nombre: "Vainilla", descripcion: "", imagen: "img/batido.jpg" },
        { nombre: "Chocolate", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Chocolate %70", descripcion: "", imagen: "img/cafe.jpg" },
        { nombre: "Super DDL", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "DDL Granizado", descripcion: "",imagen: "img/cafe.jpg" },
        { nombre: "Frutilla a la crema", descripcion: "", imagen: "img/batido.jpg" },
        { nombre: "Menta granizada", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Mascarpone", descripcion: "", imagen: "img/cafe.jpg" },
        { nombre: "Alfajor", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Tramontana", descripcion: "",imagen: "img/cafe.jpg" },
        { nombre: "Mantecol", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Lemon Pie", descripcion: "", imagen: "img/cafe.jpg" },
        { nombre: "Tiramisú", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Crema cookie", descripcion: "",imagen: "img/cafe.jpg" },
        { nombre: "Flan", descripcion: "", imagen: "img/batido.jpg" },
        { nombre: "Banana Split", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Balcarce", descripcion: "", imagen: "img/cafe.jpg" },
        { nombre: "Limón", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Mandarina", descripcion: "", imagen: "img/cafe.jpg" },
        { nombre: "Frutilla", descripcion: "", imagen: "img/alfajor.jpg" },

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



