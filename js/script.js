function capturar(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    if(nombre==""){
        alert("Falta llenar el Campo Nombre");
        document.getElementById("nombre").focus();
    } else if (correo==""){
        alert("Falta llenar el campo Correo");
        document.getElementById("correo").focus();
    } else if (asunto==""){
        alert("Fata llenar el Campo Asunto");
        document.getElementById("asunto").focus();
    } else if(mensaje==""){
        alert("Falta llenar el Campo Mensaje");
        document.getElementById("mensaje").focus();
    } else {
        console.log(`Nombre: ${nombre} \nCorreo: ${correo} \nasunto: ${asunto} \nMensaje: ${mensaje}`);

    }


}

function reset(){
    document.getElementById("formulario").reset();
}



