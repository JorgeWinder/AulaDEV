console.log("Hola, Jorge");
const noCambia= "Jorge";
let Cambia="Winder";

// Una constante como promesa

const getUser = new Promise(function(resolve,reject){

        setTimeout(function(){
            resolve();
        },2000);

});

getUser
    .then(function(){

        console.log("Se ejecuta el paso 1");

    } )
    .then(function(){
        throw "Se forzó un error";
        console.log("Se ejecuta el paso 2");

    })
    .then(function(){
        
        console.log("Se ejecuta el paso 3");

    })
    .catch(function(err){

        console.log(err);
    });


    // Ejecutar un función como promesa

function EjecutoFun() {

    return new Promise(function(resolve, reject){
    setTimeout(function(){
                resolve("Prirmer ok ok");		
            },4000)	 
    })

}

    EjecutoFun()
    .then(function(mensaje){
            console.log(mensaje);
    })
    .then(function(){
            console.log("Segundo ok");
    });


//     // Ejecutar todas las promesas
//    Promise.all([getUser,EjecutoFun()])
//    .then(function(msg){
//         console.log("Se ejecutaron las dos:");
//     })
//    .catch(function(){
//         console.log("Error");
//     });