document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Agua $500", descripcion: "Con o sin gas",imagen: "img/agua.jfif" },
        { nombre: "Gaseosa", descripcion: "Linea Coca-Cola",imagen: "img/agua.jfif" },
        { nombre: "Agua saborizada", descripcion: "Aquarius", imagen: "img/gaseosa.jfif" },
        { nombre: "Exprimido", descripcion: "De naranja", imagen: "img/exprimido.jfif" },
        { nombre: "Licuados", descripcion: "Fruta fresca con Leche o Agua", imagen: "img/licuado.jfif" },
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
        { nombre: "Expresso", descripcion: "",imagen: "img/cafe.jpg" },
        { nombre: "Americano", descripcion: "", imagen: "img/batido.jpg" },
        { nombre: "Cortado", descripcion: "", imagen: "img/cafe.jpg" },
        { nombre: "Cortado doble", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Café con leche", descripcion: "",imagen: "img/cafe.jpg" },
        { nombre: "Lagrima", descripcion: "", imagen: "img/batido.jpg" },
        { nombre: "Lagrima doble", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Capuccino", descripcion: "Café, leche, chocolate, crema y canela", imagen: "img/cafe.jpg" },
        { nombre: "Submarino", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Affogato", descripcion: "Café con una bocha de helado",imagen: "img/cafe.jpg" },
        { nombre: "Café frappe", descripcion: "Café con leche espumada", imagen: "img/batido.jpg" },
        { nombre: "Té", descripcion: "Con o sin leche", imagen: "img/alfajor.jpg" },
        { nombre: "Vaso de leche", descripcion: "Caliente o fria", imagen: "img/cafe.jpg" },
        { nombre: "Leche de almendras", descripcion: "Adicional", imagen: "img/alfajor.jpg" },
        { nombre: "Crema", descripcion: "Adicional", imagen: "img/alfajor.jpg" }
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
        { nombre: "Medialuna", descripcion: "",imagen: "img/cafe.jpg" },
        { nombre: "Alfajor", descripcion: "Consultar sabores", imagen: "img/batido.jpg" },
        { nombre: "Alfajor de maicena", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Cookies", descripcion: "Consultar sabores", imagen: "img/cafe.jpg" },
        { nombre: "Borrachitos", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Muffins", descripcion: "Consultar sabores",imagen: "img/cafe.jpg" },
        { nombre: "Porcion de budin", descripcion: "Consultar sabores", imagen: "img/batido.jpg" },
        { nombre: "Brownie", descripcion: "", imagen: "img/alfajor.jpg" },
        { nombre: "Pastafrola", descripcion: "", imagen: "img/cafe.jpg" },
        { nombre: "Tarta de ricota", descripcion: "",imagen: "img/cafe.jpg" },
        { nombre: "Tarta de coco", descripcion: "", imagen: "img/batido.jpg" },
        { nombre: "Crumble de manzana", descripcion: "", imagen: "img/alfajor.jpg" }
        
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
        { nombre: "Medialuna", descripcion: "Jamon & queso",imagen: "img/cafe.jpg" },
        { nombre: "Tostado de miga", descripcion: "Jamon & queso", imagen: "img/batido.jpg" },
        { nombre: "Porcion de tostadas", descripcion: "2 dips a eleccion: queso-crema/mermelada/ddl", imagen: "img/alfajor.jpg" },
        { nombre: "Sanguche de focaccia", descripcion: "Jamon cocido/crudo o Mortadela & queso", imagen: "img/cafe.jpg" },
        
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
        { nombre: "Limón", descripcion: "Al agua", imagen: "img/alfajor.jpg" },
        { nombre: "Mandarina", descripcion: "Al agua", imagen: "img/cafe.jpg" },
        { nombre: "Frutilla", descripcion: "Al agua", imagen: "img/alfajor.jpg" },

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



