const form = document.getElementById('formulario_creacion');
const nombre = document.getElementById('nombre');
const fecha = document.getElementById('fecha');
const account = document.getElementById('account');
const pass = document.getElementById('password');
const terminos = document.getElementById('checkbox');
const mail = document.getElementById('mail');
const error = document.getElementById('mensajeError');

form.addEventListener("submit", e=>{
    e.preventDefault();
    let alerta = ""
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value == ''){
        alerta += 'Ingresá nombre <br>'
        entrar = true;
    }
    if(fecha.value == 0){
        alerta += 'Ingresá fecha válida <br>';
        entrar = true;
    }
    if(account.value == ''){
        alerta += 'Ingresá usuario <br>';
        entrar = true; 
    }
    if(!regexEmail.test(mail.value)){
        alerta += 'Ingresá mail válido <br>';
        entrar = true;
    }
    if(pass.value.length <1){
        alerta += 'Ingresá contraseña <br>';
        entrar = true;
    }
    if(form.terminos.checked == false){
        alerta += 'Debes aceptar términos y condiciones <br>';
        entrar = true;
    }
    if(entrar){
        alert("Datos incorrectos");
        mensajeError.innerHTML = alerta;
    }else{
        alert("Cuenta creada exitosamente");
        window.location.href = '../html/formulario_logeo_foro.html';
    }
});