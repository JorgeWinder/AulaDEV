//Retorna un elemento con el id home
// document.getElementById("home")

//Retorna una lista de elementos con la clase home
// document.getElementsByClassname("home")

//Retorna una lista de elementos con el tag div
// document.getElementsByTagName("div")

//Devuelve el primer elemento que coincida con el query de búsqueda.
// document.querySelector("div .home #modal")

//Devuelve todos los elementos que coincidan con el query de búsqueda.
// document.querySelectorAll("div .home #modal")

//document.querySelector('#tabla1 tbody').append(Texto);

document.querySelector("#table");


function videoItemPlantilla(src, titulo) {

    return (`<tr><td>45347734</td><td>${titulo}</td><td><img src="${src}" alt=""></td></tr>`);
    
}

console.log(videoItemPlantilla('RutaImagen','Título de peli'));