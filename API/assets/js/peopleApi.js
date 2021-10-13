// url api. http que se va aconsumir 
const API = "https://rickandmortyapi.com/api/character"
const btnSerarch = document.getElementById("btnSearch");

// funcion para obtener los resultados de la API
const getData = (archivo) => {
    // trae la informacion de la API
    return (fetch(archivo)
    // promesas
    .then ((response) => response.json())
    .then((json)=>{
        console.log(json);
        // envia los datos a la funcion data 
        fillData(json);
    }) 
    .catch((error) =>{
        console.log("Error in the API", error);
    })
  );
}

// Tomar los 10 json y dibujarlos en una card 
const fillData = (datos) => {
    
    let html ="";
    // forEach es mas rapido a la hora de recorrer el json 
    datos.results.forEach(rm => {
        html += '<div class="col">';
        html += '<div class="card h-100">';
        html += `<h5 class="card-title">${rm.name}</h5>`;
        html += `<img src="${rm.image}" class="card-img-top" alt="${rm.origin.url}">`;
        html += '<div class="card-body">'; 
        html += `<h5 class="text-muted">${rm.status}</h5>`;
        html += `<h5 class="card-text">${rm.gender}</h5>`;
       
       
        html += "</div>";
        html += "</div>";
        html += "</div>";
    });

    document.getElementById("dataPeople").innerHTML = html;
}

btnSerarch.onclick = function () {
    // un parametro recibe un valor 
    // Se ejecuta la API 
    getData (API);
};