const API = "https://jsonplaceholder.typicode.com/photos";

const getData = (archivo) => {
//   Consume la API del URL, trae la informacion  
return fetch(archivo)
// Guarda los json que trajo el fetch
.then((response) => response.json())
.then((json) => {
    // envia la informacion a la funcion fillData para mostrarlos en el html
    fillData(json);
})
    .catch((error)=>{
        // En caso que el API no responda
        console.log("Error con el API", error);
    })
};

const fillData = (data) =>{
    let html = "";
    let limit =20;
    // cuando no tiene un limite se usa foreach
    for (let i=0; i < limit; i++) {
        html += '<div class="col">';
        html += '<div class="card h-100">';
        html += `<img src="${data[i].url}" class="card-img-top" alt="${data[i].title}">`;
        html += '<div class="card-body">';
        html += `<h5 class="text-muted">${data[i].title}</h5>`;
        
        html += "</div>";
        html += "</div>";
        html += "</div>";
    }

    document.getElementById("dataAlbum").innerHTML = html;
};


// Se invoca la funcion automaticamente, no hay bton 
getData(API);