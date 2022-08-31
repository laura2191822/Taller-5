$(document).ready(function () {
    const nombre  = document.getElementById('nombre');
    const apellido  = document.getElementById('apellido');
    const correo  = document.getElementById('correo');
    const user  = document.getElementById('user');
    const contraseña  = document.getElementById('pswrd');
    const combo  = document.getElementById('combo');
    const enfermedades = document.getElementById('enfermedades')
    const form = document.getElementById('form');
    const dia = document.getElementById('dia');
    const mes = document.getElementById('mes');
    const anno = document.getElementById('anno');
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const regexuser= new RegExp(/^[A-Za-z0-9\s]+$/g);
    const regexpswr= new RegExp (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#,%,/,&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/);

    // implementacion de la funcion para calcular la edad segun fecha de nacimiento ingresada

    function edadUser(Cdia, Cmes, Canno){
        //conversion de las cadenas recibidas a tipo numerico
        var diaC =  parseInt(Cdia, 10);
        var mesC = parseInt(Cmes, 10);
        var annoC = parseInt(Canno, 10);
        //creacion de fechas y realizacion del calculo
        var fechaActual = new Date();
        var annoActual = fechaActual.getFullYear();
        var mesActual = fechaActual.getMonth();
        var diaActual = fechaActual.getDate();
        var age = annoActual - annoC;

        if (mesActual < (mesC - 1)) {
            age--;
        }
        if (((mesC - 1) == mesActual) && (diaActual < diaC)) {
            age--;
        }
        return age;
    }
    // var edad = edadUser(dia.value, mes.value, anno.value);
    // $('#edad').html(`Usted tiene ${edad} años =)`);

    //acultar o mostrar la opcion de enfermedades contagiosas 
    $("#enfermedades").hide();

    $('#combo').click(function () { 
        if (combo.checked === true) {
            $("#enfermedades").show();
            
        }
        else{
            $("#enfermedades").hide();
        }
    });
    
    // agregar la edad al cuerpo de la pgina 
    function mostrarCumple(e){
        var edad = edadUser(dia.value, mes.value, anno.value);
        $('#edad').html(`Usted tiene ${edad} años =)`);
    }
    anno.addEventListener('input', mostrarCumple);

    //validacciion del formulario

    form.addEventListener('submit', e=>{
        e.preventDefault();
        
        if (!nombre.value) {
            alert('La seccion "Nombres" es obligatoria'); 
        }
        if (!apellido.value) {
            alert('La seccion "Apellidos" es obligatoria');
        }
        if (!dia.value) {
            alert('Ingrese el dia de su nacimiento'); 
        }
        if (!mes.value) {
            alert('Ingrese el mes de su nacimiento'); 
        }
        if (!anno.value) {
            alert('Ingrese el año de su nacimiento'); 
        }
        if (!correo.value) {
            alert('La seccion "Correo electronico" es obligatoria');
        }
        if (!user.value) {
            alert('La seccion "Nombre de usuario" es obligatoria');
        }
        if (!contraseña.value) {
            alert('La seccion "Contraseña" es obligatoria');
        }
        if(!regexpswr.test(contraseña.value)){
            alert('La contraseña no es valida, debe contener más de 8 caracteres, mayúsculas , numeros, letras y/o los siguientes caracteres [#,%,/,&]');
        }
        if (!emailRegex.test(correo.value)) {
            alert('La direccion de correo no es valida');
        }
        if (!regexuser.test(user.value)) {
            alert('Su nombre de usuario no debe contener caractewres extraños')
        }
        if (combo.checked === true) {
            if (!enfermedades.value || enfermedades.value.length < 2) {
                alert('La seccion "Enfermedades" es obligatoria');
            }
        }
    })
    

});

  
