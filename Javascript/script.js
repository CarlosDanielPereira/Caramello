//MENU HAMBURGUER
// Seleciona o ícone do menu e o menu em si
const menuIcon = document.getElementById('Menu');
const menuHamburguer = document.getElementById('menu-hamburguer');

// Alterna o menu ao clicar no ícone
menuIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que o clique no ícone feche o menu
    menuHamburguer.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
menuHamburguer.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        menuHamburguer.classList.remove('active');
    }
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !menuHamburguer.contains(e.target)) {
        menuHamburguer.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    //Seletores das divs WEC e F1
    const wecSecao = document.getElementById("wec");
    const f1Secao = document.getElementById("f1");

    //seletor do HTML
    const seletor = document.getElementById("sel-visualizacao");

    //controlar a visibilidade das seções
    function updateVisibility(selectedView) {
        if (selectedView === "wec") {
            wecSecao.style.display = "block";
            f1Secao.style.display = "none";
        } else if (selectedView === "f1") {
            wecSecao.style.display = "none";
            f1Secao.style.display = "block";
        } else if (selectedView === "todos") {
            wecSecao.style.display = "block";
            f1Secao.style.display = "block";
        }
    }

    //evento de mudança no seletor
    seletor.addEventListener("change", function () {
        updateVisibility(this.value);
    });

    //exibição apenas com a seção WEC
    updateVisibility("wec");
});