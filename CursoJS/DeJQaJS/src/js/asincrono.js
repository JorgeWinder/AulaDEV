// Es código asincrono que se lee de una manera sincrona
// https://yts.am/api

// (async function load(){

//     const response = await fetch('https://yts.am/api/v2/list_movies.json?genre=action');
//     const data = await response.json();
//     console.log(data);

// })();


(async function load(){


    async function getData(url){
        const data = await fetch(url);
        const lista = await data.json();
        return lista;
    }

    const ListaAccion = await getData('https://yts.am/api/v2/list_movies.json?genre=action');
    const ListaDrama = await getData('https://yts.am/api/v2/list_movies.json?genre=drama');
    const ListaAnimacion = await getData('https://yts.am/api/v2/list_movies.json?genre=animation');
    //console.log(ListaAccion, ListaDrama, ListaAnimacion);

    const $contenedor1 = document.querySelector("#tabla1");
    renderPeliculaList(ListaAccion,$contenedor1);

    const $contenedor2 = document.querySelector("#tabla2");
    renderPeliculaList(ListaAnimacion,$contenedor2);    

    
})();

function videoItemPlantilla(src, titulo, id) {    
    return (`<tr><td>${id}</td><td>${titulo}</td><td><img src="${src}" alt="" width='150'></td></tr>`);        
}

function renderPeliculaList(Lista,$contenedor) {

    let HtmlCod = ""; 

    Lista.data.movies.forEach(Pelicula => {
        //console.log(Pelicula);
        const StringHtml = videoItemPlantilla(Pelicula.background_image, Pelicula.title, Pelicula.id);          
        HtmlCod += StringHtml;
    });

    $contenedor.children[1].innerHTML= HtmlCod;
    
}


// document.addEventListener("DOMContentLoaded", function(event) { 
//     //alert("Se cargo la página");
// });


