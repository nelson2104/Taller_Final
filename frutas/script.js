function par(){
    let elementos = document.getElementsByClassName("pares");
    for(const elemento of elementos){
        elemento.style.backgroundColor = "#8EC98E";
    }; 
}


function inpar(){
    let elementosInpares = document.getElementsByClassName("inpares");
    for(elementoInpar of elementosInpares){
        elementoInpar.style.backgroundColor ="#6767E2"
    }

}