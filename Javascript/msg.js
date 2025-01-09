function mostrarMsg() {
    let noticia2 = document.getElementById("noticia2");
    let botao = document.getElementById("botao");

    if (noticia2.style.display === "block") {
        noticia2.style.display = "none";
        botao.textContent = "VEJA MAIS";
    } else {
        noticia2.style.display = "block";
        botao.textContent = "VEJA MENOS";
    }
}
