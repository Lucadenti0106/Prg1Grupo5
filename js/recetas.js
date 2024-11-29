let querySelector = location.search;
let querySelectorObj = new URLSearchParams(querySelector);
let recetaId = querySelectorObj.get('id');

if (recetaId) {
    fetch(`https://dummyjson.com/recipes/${recetaId}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let detalle = document.getElementById("detalleReceta");
            detalle.innerHTML = `
                <article class="informacion-receta">                      
                    <img src="${data.image}" alt="${data.name}" style="width: 100%; max-width: 66vh;">
                    <article class="recetas-info-data">
                        <h1><strong>${data.name}</strong></h1>
                        <h3 style="margin-bottom: 1rem;">${data.difficulty}</h3>
                        <p style="margin-bottom: 1rem;">${data.instructions}</p>
                        <p style="margin-bottom: 1rem;">Tiempo de cocción: ${data.cookTimeMinutes} min</p>
                        <p style="margin-bottom: 1rem;">Categorías: </p>
                        <ul id="categoriesList" style="list-style: none; padding: 0;"></ul>
                    </article>
                </article>
            `;
            let categoriesListHtml = "";
            for (let i = 0; i < data.tags.length; i++) {
                categoriesListHtml += `
                    <li>
                        <a href="category.html?category=${data.tags[i]}" style="text-decoration: none; color: black;">${data.tags[i]}</a>
                    </li>`;
            }

            let categoriesList = document.getElementById("categoriesList");
            categoriesList.innerHTML = categoriesListHtml;
        })
        .catch(function (error) {
            console.log("Error:", error);
        });
}

