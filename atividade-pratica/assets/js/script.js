let darkModeClass = 'dark-mode'
let mdChange = document.getElementById('mode-selector');
let h1 = document.querySelector('h1');
let body = document.querySelector('body');
let button = document.querySelector('button');
let footer = document.querySelector('footer');

mdChange.addEventListener('click', modoChange);

function modoChange() {
    classDarkM();
    mudaTexto();
}

function classDarkM() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function mudaTexto() {
    if (body.classList.contains(darkModeClass)){
        h1.innerHTML = "Modo Escuro ON";
        button.innerHTML = 'Modo Claro';
    } else {
        h1.innerHTML = "Modo Claro ON";
        button.innerHTML = 'Modo Escuro';
    }
}