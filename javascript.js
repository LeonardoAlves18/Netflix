let body = document.querySelector("body");
let perfis = document.querySelector(".gerenciar h3");

perfis.addEventListener("click", () => {
  if (body.classList.contains("hud-gerencia")) {
    body.classList.remove("hud-gerencia");
    document.querySelector("h1").innerHTML = "Quem está assistindo?";
    document.querySelector(".gerenciar h3").innerHTML = "Gerenciar perfis";
  } else {
    document.querySelector(".gerenciar h3").innerHTML = "Concluido";
    document.querySelector("h1").innerHTML = "Gerenciar perfis:";
    body.classList.add("hud-gerencia");
  }
});
