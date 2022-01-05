/* Estrutura HTML para interação - tags, id e classe */

document.getElementById('titulo');
document.getElementsByTagName('li'); /* retorna um Array mesmo apenas com 1 ocorrência */
document.getElementsByClassName('textos'); /* retorna um Array mesmo apenas com 1 ocorrência */
document.querySelectorAll('.primeira-classe .segunda-classe'); document.querySelectorAll('li .opcao'); /* seleção que dá a opção de combinar outros tipos de interação na DOM e também retorna um Array mesmo apenas com 1 ocorrência */

document.createElement(element); /* Cria um novo elemento HTML */
document.removeChild(element); /* Remove um elemento Filho do elemento Pai */
document.appendChild(element); /* Adiciona um elemento */
document.replaceChild(new,old) /* Substitui um elemento, definido por dois parâmetros nesta sequência: o que quer adicionar e o que quer remover */