
// Se extrae datos de un servicio externo
// https://randomuser.me/
// https://swapi.co/
// https://yts.am/api


$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    },
    error: function(error) {
        console.log(error);
      }
  });


  fetch('https://randomuser.me/api/')
    .then(function(response){
            //console.log(response);
            return response.json();
    })
    .then(function(user){
        console.log("User",user.results[0].name.first);        
    })
    .catch(function(){

        console.log("Algo falló");
            
    });


    // Trabajando con metodo post

    let token = "{!! csrf_token() !!}";

	fetch("{{route('name-your-route')}}", {
		method: 'POST',
		headers: {
        	"X-CSRF-Token": token
      	},
		body: JSON.stringify({
			name: 'luis',
			age: 28
		})
	}).then(function (data) {
  		console.log('Request success: ', data);
	}).catch(function (error) {  
  		console.log('Request failure: ', error);
	});


    // ----------------------------

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
      });

