let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resultadoBuscador = queryStringObj.get("buscador");

let url = `https://dummyjson.com/recipes/search?q=${resultadoBuscador}`;
let recetaBuscada = document.querySelector(".search-results");

if (resultadoBuscador) {
    if (resultadoBuscador.length >= 3) { 
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let receta = data.recipes;
                console.log(data);

                let recetasEncontradas = "";

                if (receta && receta.length > 0) {
                    for (let i = 0; i < receta.length; i++) {
                        recetasEncontradas += `
                        <article class="article-recetas">
                          <img src="${receta[i].image}" alt="">
                          <article class="recetas-info">
                            <h2>${receta[i].name}</h2>
                            <p>${receta[i].difficulty}</p>
                          </article>
                          <article class="detalle-recetas-boton">
                            <a href="./recetas.html?id=${receta[i].id}">Ver más</a>
                          </article>
                        </article>
                        `;
                    }
                } else {
                    recetasEncontradas = `<h2>No se encontraron recetas para "${resultadoBuscador}".</h2>`;
                }

                recetaBuscada.innerHTML = recetasEncontradas;
            })
            .catch(function (error) {
                console.log("Error:", error);
                recetaBuscada.innerHTML = "<h2>Hubo un error al buscar las recetas.</h2>";
            });
    } else {
        recetaBuscada.innerHTML = `<h2><strong>El término de búsqueda debe tener al menos 3 caracteres.</strong></h2>`;
    }
} else {
    recetaBuscada.innerHTML = `<h2><strong>No se ingreso ningun termino de busqueda.</strong></h2>`;
}