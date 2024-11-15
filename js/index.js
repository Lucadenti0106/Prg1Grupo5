let recetasMostradas = 0; // Contador de recetas ya mostradas

// Función para cargar recetas y agregar al HTML
function cargarRecetas() {
  fetch('https://dummyjson.com/recipes')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let recetas = data.recipes;
      let cocina = "";
      let characterList = document.querySelector(".recipe-list");

      // Cargar 10 recetas adicionales a partir de recetasMostradas
      for (let i = recetasMostradas; i < recetasMostradas + 10 && i < recetas.length; i++) {
        cocina += `
          <article class="article-recetas">
            <img src="${recetas[i].image}" alt="">
            <article class="recetas-info">
              <h2>${recetas[i].name}</h2>
              <p>${recetas[i].difficulty}</p>
              </article>
            <article class="detalle-recetas-boton">
              <a href="*">Ver mas</a>
            </article>
          </article>
        `;
      }

      // Incrementar el contador de recetas ya mostradas
      recetasMostradas += 10;

      // Agregar las recetas al contenedor
      characterList.innerHTML += cocina;
    })
    .catch(function(error) {
      console.log("error: ", error);
    });
}

// Evento de clic en el botón para cargar más recetas
document.querySelector("#loadMoreButton").addEventListener("click", cargarRecetas);

// Cargar las primeras 10 recetas al inicio
cargarRecetas();









