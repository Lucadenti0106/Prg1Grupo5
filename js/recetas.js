let querySelector = location.search;
let querySelectorObj = new URLSearchParams(querySelector);
let recetaId = querySelectorObj.get('id');
console.log(recetaId)

    if (recetaId) {
        fetch(`https://dummyjson.com/recipes/${recetaId}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data)
                let detalle = document.getElementById("detalleReceta");
                detalle.innerHTML = `
                    <article class="article-recetas">
                        <article class="recetas-info">
                            <h2><strong>${data.name}</strong></h2>
                            <img src="${data.image}" alt="${data.name}" style="width: 100%; max-width: 300px;">
                            <p>Instrucciones de preparación: ${data.instructions}</p>
                            <p>Tiempo de cocción: ${data.cookTimeMinutes}</p>
                            <p>Categorías: ${data.tags}</p>
                        </article>
                        <ul id="categoriesList"></ul>
                    </article>
                `;

                
                let categoriesList = document.getElementById("categoriesList");
                data.categories.forEach(function(category) {
                    let categoryItem = document.createElement("li");
                    categoryItem.innerHTML = '<a href="categoria.html?category=' + category + '">' + category + '</a>';
                    categoriesList.appendChild(categoryItem);
                });
            })
            .catch(function(error) {
                console.log("Error al obtener los detalles de la receta:", error);
            });
    }