const nombre = document.getElementById('account');
const pass = document.getElementById('password');
const form = document.getElementById('form_logeo');
const error = document.getElementById('alerta');
           
form.addEventListener("submit", e=>{
    e.preventDefault()
    let mensaje = '';
    let entrar = false;
    error.innerHTML ='';
    if(nombre.value == ''){
        mensaje +='Ingrese nombre válido <br>'
        entrar = true;
    }
    if(pass.value.length <1 || pass.value.length >10){
        mensaje += 'ingrese contraseña válida <br>';
        entrar = true;
    }
    if(entrar){
        error.innerHTML = mensaje;
        alert("Datos incorrectos");
    }else{
        alert("Logeo exitoso");
        window.location.href = '../index.html';
    }
});
