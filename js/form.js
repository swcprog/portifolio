campoNome = document.getElementById("nome");
labelNome = document.getElementById("label-nome");
divNome = document.getElementById("div-nome");
campoEmail = document.getElementById("email");
labelEmail = document.getElementById("label-email");
divEmail = document.getElementById("div-email");
campoAssunto = document.getElementById("assunto");
labelAssunto = document.getElementById("label-assunto");
divAssunto = document.getElementById("div-assunto");

campoNome.addEventListener("keyup",(event)=>{

    if ((!validarNome(campoNome.value)) || (campoNome.value.length < 4) || (campoNome.value.length > 25)){
        labelNome.innerHTML = "* O nome deve conter de 4 a 25 caracteres. Números e caracteres especiais são inválidos."
        divNome.classList.add("error");
    }
    else{
        labelNome.innerHTML = "Nome"
        divNome.classList.remove("error");
    }
})

campoEmail.addEventListener("keyup",(event)=>{
    if (!validarEmail(campoEmail.value)){
       divEmail.classList.add('error'); 
       labelEmail.innerHTML = "* Digite o e-mail no formato: user@email.com"; 
    }else{
        divEmail.classList.remove("error");
        labelEmail.innerHTML = "Email";
    }
})

campoAssunto.addEventListener("keyup",()=>{
    if(!validarAssunto(campoAssunto.value)){
        divAssunto.classList.add("error");
        labelAssunto.innerHTML = "* Digite um assunto válido."
    }else{
        divAssunto.classList.remove("error");
        labelAssunto.innerHTML = "Assunto"; 
    }
})


function validarNome(nome) {
    const re = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
    return re.test(nome);
}

function validarEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return re.test(email);
}

function validarAssunto(assunto){
    if(assunto.length < 4){
        return false;
    }else{
        return true;
    }
}