const url = "http://localhost:8080/api/all";
(function() {
    const xhttp = new XMLHttpRequest;
    xhttp.open('GET',url,true);
    xhttp.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            let alldata = JSON.parse(this.responseText);
            document.getElementById("contenido").textContent=`${alldata.map(x=>x.regnombres)}\n${alldata.map(x=>x.regapellidos)}`
        }
    }
    xhttp.send()
})();
