let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resultadoBuscador = queryStringObj.get("buscador");

let url = `https://dummyjson.com/recipes/search?q=${resultadoBuscador}`;
let recetaBuscada = document.querySelector(".search-results");

if (resultadoBuscador) {
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
                    recetasEncontradas +=  `
                    <article class="article-recetas">
                      <img src="${receta[i].image}" alt="">
                      <article class="recetas-info">
                        <h2>${receta[i].name}</h2>
                        <p>${receta[i].difficulty}</p>
                        </article>
                      <article class="detalle-recetas-boton">
                        <a href="./recetas.html?id=${receta[i].id}">Ver mas</a>
                      </article>
                    </article>
                  `;
                }
            } else {
                recetasEncontradas = `<p>No se encontraron recetas para ${resultadoBuscador}.</p>`;
            }

            recetaBuscada.innerHTML = recetasEncontradas;
        })
        .catch(function (error) {
            console.log("Error:", error);
            recetaBuscada.innerHTML = "<p>Hubo un error al buscar las recetas.</p>";
        });

} else {
    recetaBuscada.innerText = "No se ingresó ningún término de búsqueda.";
}