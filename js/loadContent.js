// Funcion para cargar el contenido de la pagina
function loadContent(id, file) {
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error('Error al cargar ' + file, error));
}

// DOM cargado
document.addEventListener('DOMContentLoaded', function() {
    // Cargar contenido de la pagina
    loadContent('header', 'header.html');
    loadContent('footer', 'footer.html');
});