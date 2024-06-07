

function cambiarBorde() {
    img = document.querySelector("#imagen");
    nuevo_borde = "red 2px solid";
    borde = img.style.border;
    
    if(borde == "") {
        img.style.border = nuevo_borde;
    } 
    else {
        img.style.border = "";
    }

}

