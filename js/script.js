async function cargarContenido(pagina, titulo) {
    try {
        const response = await fetch(pagina);
        document.getElementById("content").innerHTML = await response.text();
        ajustarTitulo(titulo)
    } catch (error) {
        document.getElementById("content").innerHTML = '<p class="text-danger">Error al cargar el contenido, por favor vuelve a intentarlo.</p>';
        console.error('Error al cargar el contenido, por favor vuelve a intentarlo:', error);
    }
}

function inicializarCarruseles() {
    const carousels = document.querySelectorAll('.carousel'); // Buscamos en el HTML carruseles
    carousels.forEach(carousel => { // Recorremos con un foreach los elementos
        new bootstrap.Carousel(carousel); // Creamos el carrusel para que comience a moverse
    })
}

async function cargarYActivar(pagina, titulo) {
    await cargarContenido(pagina,titulo); // Espera a que termine de cargar el contenido
    inicializarCarruseles(); // Luego inicializa el carrusel
}

function ajustarTitulo(titulo) {
    document.title = titulo; // Cambia el título
}