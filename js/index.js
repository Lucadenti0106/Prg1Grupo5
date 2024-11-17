let recetasMostradas = 0; 


function cargarRecetas() {
  fetch('https://dummyjson.com/recipes')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let recetas = data.recipes;
      let cocina = "";
      let characterList = document.querySelector(".recipe-list");

      
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

      
      recetasMostradas += 10;

      
      characterList.innerHTML += cocina;
    })
    .catch(function(error) {
      console.log("error: ", error);
    });
}


document.querySelector(".load-more-button").addEventListener("click", cargarRecetas);


cargarRecetas();









