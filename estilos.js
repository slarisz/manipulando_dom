const meuElemento = document.getElementById('meu-elemento');

meuElemento.classList.add("novo-estilo");
// adiciona a classe "meu estilo"

meuElemento.classList.remove("classe");
// remove a classe "classe estilo"

meuElemento.classList.toggle("dark-mode");
// adiciona a classe "dark-mode" caso ela não faça parte da lista e a remove caso ela faça.

document.getElementsByTagName("p").styles.color = "blue";