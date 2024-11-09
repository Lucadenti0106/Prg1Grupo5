fetch('https://dummyjson.com/recipes')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let recetas = data.recipes;
    let cocina = "";
    let characterList = document.querySelector(".recipe-list");

    for (let i = 0; i < 10; i++) {
      cocina += `
      <article class="article-recetas">
        <img src="${recetas[i].image}" alt="">
        <article class="recetas-info">
          <h2>${recetas[i].name}</h2>
          <p>${recetas[i].difficulty}</p>
        </article>
        <article class="detalle-recetas-boton">
          <a href="recetas.html?id=${recetas[i].id}">Ver más</a>
        </article>
      </article>
        `;
    }
    characterList.innerHTML = cocina;
  })
  .catch(function (error) {
    console.log("Error al obtener recetas:", error);
  });


function verDetalle(id) {
  fetch(`https://dummyjson.com/recipes/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let detalle = document.getElementById("detalleReceta");
      detalle.style.display = "block";  
      detalle.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.image}" alt="${data.name}" style="width: 100%; max-width: 300px;">
            <p>Dificultad: ${data.difficulty}</p>
            <p>Descripción: ${data.instructions}</p>
        `;
    })
    .catch(function (error) {
      console.log("Error al obtener los detalles de la receta:", error);
    });
}









