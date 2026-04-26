document.addEventListener("DOMContentLoaded", () => {
    renderFeatured();
});

function renderFeatured() {
    const featuredItems = [
        { title: "Gelato Temporada", img: "img/gelato.jpg", span: "md:col-span-2" },
        { title: "Medialunas", img: "img/medialuna.jpg", span: "" },
        { title: "Café Especialidad", img: "img/cafe.jpg", span: "" },
        { title: "Alfajores de Autor", img: "img/alfajor.jpg", span: "md:col-span-2" }
    ];

    const grid = document.getElementById('featured-grid');
    if (grid) {
        grid.innerHTML = featuredItems.map(item => `
            <div class="${item.span} relative rounded-3xl overflow-hidden group h-[300px] md:h-auto shadow-sm">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" src="${item.img}" alt="${item.title}">
                <div class="absolute inset-0 bg-gradient-to-t from-[#795746]/80 via-transparent to-transparent flex items-end p-8">
                    <span class="text-white font-headline font-bold text-xl uppercase">${item.title}</span>
                </div>
            </div>
        `).join('');
    }
}

import { db } from './firebase.js'; 
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

async function leerProductos() {
    console.log("Cargando productos desde la nube...");
    try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        
        if (querySnapshot.empty) {
            console.log("Conectado, pero la colección 'productos' no tiene documentos.");
        }

        querySnapshot.forEach((doc) => {
            // Esto imprimirá en tu consola los datos de tu "Súper DDL"
            console.log("¡Producto encontrado!");
            console.table(doc.data()); 
        });
    } catch (error) {
        console.error("Error al leer la base de datos:", error);
    }
}

leerProductos();