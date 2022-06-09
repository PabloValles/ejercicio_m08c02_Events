window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  let inputTitle = document.querySelector("#titulo");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  titulo.addEventListener("mouseover", () => (titulo.style.color = "red"));
  titulo.addEventListener("mouseout", () => (titulo.style.color = "#000"));

  let estadoSecreto = 0;
  inputTitle.addEventListener("keypress", (e) => {
    if ((estadoSecreto == 0) & (e.key == "s")) {
      estadoSecreto++;
    } else if ((estadoSecreto == 1) & (e.key == "e")) {
      estadoSecreto++;
    } else if ((estadoSecreto == 2) & (e.key == "c")) {
      estadoSecreto++;
    } else if ((estadoSecreto == 3) & (e.key == "r")) {
      estadoSecreto++;
    } else if ((estadoSecreto == 4) & (e.key == "e")) {
      estadoSecreto++;
    } else if ((estadoSecreto == 5) & (e.key == "t")) {
      estadoSecreto++;
    } else if ((estadoSecreto == 6) & (e.key == "o")) {
      estadoSecreto++;
      alert("Secreto mágico!!");
    } else {
      estadoSecreto = 0;
    }

    console.log(estadoSecreto);
  });
};
