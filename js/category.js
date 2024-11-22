let queryString = location.search;
let queryParams = new URLSearchParams(queryString);
let category = queryParams.get("category");

if (category) {
    fetch(`https://dummyjson.com/recipes/search?q=${(category)}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
          let recetas = data.recipes; 
          let recetasHTML = "";

            if (recetas.length > 0) {
                recetas.forEach(function(receta) {
                    recetasHTML += `
                        <article class="article-recetas">
                            <img src="${receta.image}" alt="${receta.name}">
                            <article class="recetas-info">
                                <h2>${receta.name}</h2>
                                <p>${receta.difficulty}</p>
                            </article>
                            <article class="detalle-recetas-boton">
                                <a href="./recetas.html?id=${receta.id}">Ver más</a>
                            </article>
                        </article>
                    `;
                });
            } else {
                recetasHTML = `<p>No se encontraron recetas para la categoría "${category}".</p>`;
            }

            let recetasContainer = document.querySelector(".recipe-list");
            recetasContainer.innerHTML = recetasHTML;
            console.log(recetasHTML)
        })
        .catch(function(error) {
            console.log("Error al obtener las recetas de la categoría:", error);
        });
} 