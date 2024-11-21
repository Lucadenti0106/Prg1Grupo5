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
                    <article class="informacion-receta">                      
                        <img src="${data.image}" alt="${data.name}" style="width: 100%; max-width: 66vh;">
                        <article class="recetas-info-data">
                            <h1><strong>${data.name}</strong></h1>
                            <h3 style="margin-bottom: 1rem;">${data.difficulty}</h2>
                            <p style="margin-bottom: 1rem;">${data.instructions}</p>
                            <p style="margin-bottom: 1rem;">Tiempo de cocción: ${data.cookTimeMinutes} min</p>
                            <p style="margin-bottom: 1rem;">Categorías: ${data.tags}</p>
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
                console.log("Error:", error);
            });
    }