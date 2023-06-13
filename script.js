var novoparagrafo = document.createElement("p");

var texto = document.createTextNode("este é o conteúdo do paragrafo")

novoparagrafo.appendChild(texto);

console.log(novoparagrafo);

var body = document.querySelector("body");

console.log(body);