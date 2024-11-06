
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
    <img src= ${recetas[i].image} alt=''>
    <article class="recetas-info">
    <h2>${recetas[i].name} </h2>
    <p>${recetas[i].difficulty} </p>
    <article class="detalle-recetas-boton">
    <a href="*">Ver mas</a>
    </article>
    </article>
    </article>
    `;
  }
  console.log(cocina);
  characterList.innerHTML = cocina
  })
  .catch(function (error) {
  console.log("error: ", error);
  });








