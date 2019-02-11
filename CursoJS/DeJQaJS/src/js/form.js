

const URL_BASE = "https://yts.am/api/v2";  
    

async function getData(categoria){
    const data = await fetch(`${URL_BASE}/list_movies.json?genre=${categoria}`);
    const lista = await data.json();
    return lista;
}


async function CargarListaPeliculas(categoria){

    const {
        data : {
            movies : LsitaPeliculas    
        }
    } = await getData(categoria);

    window.localStorage.setItem("LsitaPeliculas",JSON.stringify(LsitaPeliculas));

    console.log(LsitaPeliculas);

    const $contenedor1 = document.querySelector("#tabla1");
    renderPeliculaList(LsitaPeliculas,$contenedor1);

    document.querySelector("#carga").remove();

}



function videoItemPlantilla(src, titulo, id) {    
    return (`<tr data-id="${id}" data-titulo="${titulo}"><td>${id}</td><td>${titulo}</td><td><img src="${src}" alt="" width='150'></td></tr>`);        
}

function renderPeliculaList(ListaPelicula,$contenedor) {

    let HtmlCod = ""; 

     ListaPelicula.forEach(Pelicula => {
        //console.log(Pelicula);
        const StringHtml = videoItemPlantilla(Pelicula.medium_cover_image, Pelicula.title, Pelicula.id);          
        HtmlCod += StringHtml;
    });

    $contenedor.children[1].innerHTML= HtmlCod;

    const filas = $contenedor.children[1].querySelectorAll("tr");
    
    filas.forEach(fila => {
        fila.children[2].classList.add('fadeIn');        
    });

    // fila.addEventListener("load",function(event){
        //     event.srcElement.classList.add('fadeIn');
    // });
    
}

function addClassList(elemento,Lista){

    Lista.forEach(element => {
        elemento.classList.add(element);
    });

}


function crearElemento(){

    const $nodo= document.createElement("img");
    $nodo.setAttribute('id','carga');
    $nodo.setAttribute('src','src/img/cargado.gif');
    $nodo.style.setProperty('width','400px');

    const $cuerpo = document.querySelector(".container");
    //$cuerpo.appendChild($nodo);

    // Insertar antes

    $cuerpo.insertBefore($nodo,$cuerpo.childNodes[2]);

}



document.addEventListener('DOMContentLoaded',function(){

    
    const $elemento = document.querySelector(".container .row div");  
    const $form = document.querySelector("form"); 

    // Agregar clases a elementos
    addClassList($elemento,['col','s12','m6']);


    // Evento submit de formulario    
    $form.addEventListener('submit',function(event){

        event.preventDefault();

        crearElemento();
        //debugger

        data = new FormData($form);
        const categoria = data.get("categoria");

        CargarListaPeliculas(categoria);

    });
        

})


// Dataset //
// document.querySelector("tbody").children.length
// document.querySelector("tbody").children[0].dataset
// document.querySelector("tbody").children[0].dataset.titulo


// function find(list, id){

//     return  list.find( movie => {
//                 return movie.id === id;
//             }        
//      );

// }



// switch (category) {
//     case"action": {
//       //código de action
//     }
//     case"drama": {
//       //código de drama
//     }
//     default: {
//       //código por defecto
//     }
//   }


// ---------------

// try {
//     //codigo a evaluar
//   }
//   catch(error) {
//     //código por si sucede un error
//     alert(error.message);
//   }

// throw new Error('No se encontró ningún resultado');