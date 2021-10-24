const url = "http://localhost:8080/api/add";
function enviardatos() {
    const xhttp = new XMLHttpRequest;
    var formData = new FormData();

    let regidentifica = document.forms["formulario"]["REGIdentifica"].value;
    let regnombre = document.forms["formulario"]["REGNombres"].value;
    let regapellidos = document.forms["formulario"]["REGApellidos"].value;
    let regcorreo = document.forms["formulario"]["REGCorreo"].value;
    let regmovil = document.forms["formulario"]["REGMovil"].value;
    let regdireccion = document.forms["formulario"]["REGDireccion"].value;
    let regmunicipio = document.forms["formulario"]["REGMunicipio"].value;
        
    formData.append("REGIdentifica",regidentifica)
    formData.append("REGNombres",regnombre)
    formData.append("REGApellidos",regapellidos)
    formData.append("REGCorreo",regcorreo)
    formData.append("REGMovil",regmovil)
    formData.append("REGDireccion",regdireccion)
    formData.append("REGMunicipio",regmunicipio)
    
    xhttp.open("POST", url, true);
    xhttp.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("ok")
        }else{console.error("Error")}
    }
        xhttp.send(formData)
}