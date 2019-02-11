
(async function load(){

    const URL_BASE = "https://yts.am/api/v2";    

    async function getData(categoria){
        const data = await fetch(`${URL_BASE}/list_movies.json?genre=${categoria}`);
        const lista = await data.json();
        return lista;
    }


    const {
        data : {
            movies : ListaAccion    
        }
    } = await getData('action');

    const {
        data : {
            movies : ListaDrama
        }
    } = await getData('drama');
    
    const {
        data: {
            movies : ListaAnimacion
        }
    } = await getData('animation');

    console.log(ListaAccion, ListaDrama, ListaAnimacion);

    const $contenedor1 = document.querySelector("#tabla1");
    renderPeliculaList(ListaAccion,$contenedor1);

    const $contenedor2 = document.querySelector("#tabla2");
    renderPeliculaList(ListaAnimacion,$contenedor2);    

    
})();

function videoItemPlantilla(src, titulo, id) {    
    return (`<tr><td>${id}</td><td>${titulo}</td><td><img src="${src}" alt="" width='150'></td></tr>`);        
}

function renderPeliculaList(ListaPelicula,$contenedor) {

    let HtmlCod = ""; 

    ListaPelicula.forEach(Pelicula => {
        //console.log(Pelicula);
        const StringHtml = videoItemPlantilla(Pelicula.medium_cover_image, Pelicula.title, Pelicula.id);          
        HtmlCod += StringHtml;
    });

    $contenedor.children[1].innerHTML= HtmlCod;
    
}

function addClassList(elemento,Lista){

    Lista.forEach(element => {
        elemento.classList.add(element);
    });

}


document.addEventListener('DOMContentLoaded',function(){

    // Agregar clases a elementos
    const $elemento = document.querySelector(".container .row div");  
    addClassList($elemento,['col','s12','m6']);

})
