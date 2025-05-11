async function cargarContenido(pagina) {
    try {
        const response = await fetch(pagina);
        document.getElementById("content").innerHTML = await response.text();
    } catch (error) {
        document.getElementById("content").innerHTML = '<p class="text-danger">Error al cargar el contenido, por favor vuelve a intentarlo.</p>';
        console.error('Error al cargar el contenido, por favor vuelve a intentarlo:', error);
    }
}