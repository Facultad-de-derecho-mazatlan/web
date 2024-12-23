// Paso 1: configurar los datos de las API de Facebook
const ACCESS_TOKEN = "TU_ACCES_TOKEN_AQUI";
const PAGE_ID = "TU_PAGE_ID_AQUI";
const API_URL = `https://graph.facebook.com/${PAGE_ID}/posts?access_token=${ACCESS_TOKEN}`;

// Paso 2: obtener publicaciones de la API
async function obtenerPublicaciones() {
    try {
        const respuesta = await fetch(API_URL);
        const datos = await respuesta.json();
        mostrarPublicaciones(datos.data); // Llamamos a la función para mostrar las publicaciones
    } catch (error) {
        console.error("Error al obtener las publicaciones:", error);
    }
}

// Paso 3: mostrar publicaciones en la página web
function mostrarPublicaciones(publicaciones) {
    const contenedor = document.getElementById("publicaciones-facebook");

    // Mostrar las primeras 5 publicaciones
    publicaciones.slice(0, 5).forEach(publicacion => {
        const div = document.createElement("div");
        div.classList.add("publicacion"); // Añadir una clase para un mejor estilo

        // Formatear la publicación
        div.innerHTML = `
            <p><strong>Fecha de Publicación:</strong> ${new Date(publicacion.created_time).toLocaleDateString()}</p>
            <p>${publicacion.message ? publicacion.message : 'No hay contenido en esta publicación.'}</p>
        `;
        contenedor.appendChild(div); // Añadir la publicación al contenedor
    });
}

// Llamar a la función para obtener y mostrar las publicaciones cuando se carga la página
document.addEventListener('DOMContentLoaded', obtenerPublicaciones);


// Simulación de publicaciones de Facebook
const publicacionesSimuladas = [
    {
        created_time: "2024-12-17T10:30:00",
        message: "¡Hola! Bienvenidos a nuestra página de Facebook. Estamos muy emocionados de compartir con ustedes nuestro contenido."
    },
    {
        created_time: "2024-12-16T15:00:00",
        message: "¡No olvides seguirnos para estar al tanto de las últimas novedades! 📲"
    },
    {
        created_time: "2024-12-15T08:00:00",
        message: "Hoy tenemos una promoción especial para nuestros seguidores. ¡Solo por hoy!"
    }
];


// Llamar a la función para mostrar las publicaciones simuladas cuando se carga la página
document.addEventListener('DOMContentLoaded', () => mostrarPublicaciones(publicacionesSimuladas));


