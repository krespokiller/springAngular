const url = "http://localhost:8080/api/add";
function enviardatos() {
    const xhttp = new XMLHttpRequest;

    let regidentifica = document.forms["formulario"]["regidentifica"].value;
    let regnombre = document.forms["formulario"]["regnombre"].value;
    let regapellidos = document.forms["formulario"]["regapellidos"].value;
    let regcorreo = document.forms["formulario"]["regcorreo"].value;
    let regmovil = document.forms["formulario"]["regmovil"].value;
    let regdireccion = document.forms["formulario"]["regdireccion"].value;
    let regmunicipio = document.forms["formulario"]["regmunicipio"].value;
        
    let body ={
        regidentifica:regidentifica,
        regnombre:regnombre,
        regapellidos:regapellidos,
        regcorreo:regcorreo,
        regmovil:regmovil,
        regdireccion:regdireccion,
        regmunicipio:regmunicipio
    }

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("ok")
        }else{console.error("Error")}
    }

    xhttp.send(body);
    console.log(body)
}