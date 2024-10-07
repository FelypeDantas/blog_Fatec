const inputCheck = document.querySelector('#modo-claro');
const elemento = document.querySelector('body');

if (localStorage.getItem('night-mode') === 'true') {
    inputCheck.checked = true; 
    elemento.setAttribute("data-bs-theme", "dark");
}

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light';
    elemento.setAttribute("data-bs-theme", modo);
    localStorage.setItem('night-mode', inputCheck.checked); 
});

const toggler = document.querySelector('.navbar-toggler');
if (toggler) {
    toggler.addEventListener('click', function() {
        const menu = document.querySelector('.cabecalho__menu');
        if (menu) {
            menu.classList.toggle('active');
        }
    });
}

