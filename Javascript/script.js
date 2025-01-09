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