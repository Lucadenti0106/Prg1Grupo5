
let queryString = location.search;
let queryParams = new URLSearchParams(queryString);
let category = queryParams.get("category");
console.log(category)

fetch(`https://dummyjson.com/recipes/tag/${category}`)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log("Recetas de la categoría:", data);
    let recetas = data.recipes;
    let recetasHTML = "";

    for (let i = 0; i < recetas.length; i++) {
    recetasHTML += `
        <article class="article-recetas">
            <img src="${recetas[i].image}" alt="">
            <article class="recetas-info">
              <h2>${recetas[i].name}</h2>
              <p>${recetas[i].difficulty}</p>
              </article>
            <article class="detalle-recetas-boton">
              <a href="./recetas.html?id=${recetas[i].id}">Ver mas</a>
            </article>
          </article>
    `;
    }

    let recetasContainer = document.querySelector(".recipe-list");
    recetasContainer.innerHTML = recetasHTML;
})
.catch(function (error) {
    console.log("Error al obtener las recetas de la categoría:", error);
});