import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

// 1. Referencia al formulario
const adminForm = document.getElementById('admin-form');

// 2. Escuchar el evento de envío
adminForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitamos que la página se recargue y perdamos el control

    // 3. Capturamos los datos de TUS inputs
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const precio = document.getElementById('precio').value;
    const imagen = document.getElementById('imagen').value;

    try {
        // 4. Enviamos el objeto a Firestore
        // addDoc crea un ID automático para cada producto (como un auto_increment)
        const docRef = await addDoc(collection(db, "productos"), {
            nombre: nombre,
            categoria: categoria,
            precio: parseFloat(precio), // Lo guardamos como número, no como texto
            url_imagen: imagen,
            fecha_creacion: new Date() // Dato extra para ordenar después
        });

        console.log("Documento escrito con ID: ", docRef.id);
        alert("¡Producto cargado con éxito!");
        adminForm.reset(); // Limpiamos el formulario para el siguiente helado

    } catch (error) {
        console.error("Error al agregar el producto: ", error);
        alert("Error al cargar. Revisá la consola.");
    }
});