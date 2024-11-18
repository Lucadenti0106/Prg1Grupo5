fetch('https://dummyjson.com/recipes/tags')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let categorias = data;
    console.log(categorias)
    let tags = "";
    let listaTags = document.querySelector(".categorias-scroll");

     
    for (let i = 0; i < categorias.length; i++) {
      tags += `
                <a href="categorias.html" class="categoria">${categorias[i]}</a>
             `;
    };
    listaTags.innerHTML = tags
  })
  .catch(function (error) {
    console.log("error: ", error);
  });