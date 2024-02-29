//CONSUMIENDO APIS

//1 declarar una variable para almacenar la URL del API
let url="https://api.spotify.com/v1/artists/1TA5sGRlKUJXBN4ZyJuDIX/top-tracks?market=US"


//2 Almacenar en una variable o en varias variables datos de control que se necesite en el API

let token="Bearer BQDR3LCrSfjSqjv-B1pr1dyuDUs2h35Jfv9pzmVSrH_buhb0qU-42CQxJ4k4jYMHCYIfR4tn91NL2J21mFC0zDaw6WNFqUH1ledXVwtVyyF8mVBnW5c"
//3 Construir la peticion que se va a enviar
let peticion={
    method:"GET", headers:{
        Authorization:token
    }
}




//4 Ejecutar el consumo del API

fetch(url,peticion)
.then(function(){})
.then(function(){})
.catch(function(){})
