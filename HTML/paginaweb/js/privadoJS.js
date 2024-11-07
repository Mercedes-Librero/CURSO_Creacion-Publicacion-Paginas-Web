// JavaScript Document
function verificar_text(identificador){
  'use strict';  
  var objeto = document.getElementById(identificador).value;  
  
  if(objeto.length > 0){
    document.getElementById(identificador + '_ok').innerHTML = '<img src="images/tick.png">';
    return true;
  } else {
    
    document.getElementById(identificador + '_ok').innerHTML = '<img src="images/exclamation.png">';
    return false;
  }
  
}

function verificar_mail(identificador) {
  'use strict';  
  var email = document.getElementById(identificador).value;
  if(email.length < 5){
    document.getElementById(identificador + '_ok').innerHTML = '<img src="images/exclamation.png">';
    return false;
  }
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  if(!regex.test(email)) {
    document.getElementById(identificador + '_ok').innerHTML = '<img src="images/exclamation.png">';
    return false;
  } else {
    document.getElementById(identificador + '_ok').innerHTML = '<img src="images/tick.png">';
    return true;
  }
}

function verificar_fecha(identificador){
  'use strict';  
  var objeto = document.getElementById(identificador).value;
  
  if(objeto.length > 0){
    document.getElementById(identificador + '_ok').innerHTML = '<img src="images/tick.png">';
    return true;
  } else {
    document.getElementById(identificador + '_ok').innerHTML = '<img src="images/exclamation.png">';
    return false;
  }  
}
function comprobarFecha(identificador){
  let Fecha = document.getElementById('fecha').value;
  let miFecha = new Date(Fecha);
  let hoyMismo = new Date(); 
  let a90dias = new Date();
  a90dias.setDate(hoyMismo.getDate()+90);
  
  if (miFecha.getDay() == 1){
    $('#div_errores').html('');
    //Es lunes, esta cerrado
    $('#div_errores').html('No hay servicio los lunes');
    document.getElementById(identificador + '_ok').innerHTML = '<img src="images/exclamation.png">';
    return false;
  }
  if (miFecha < hoyMismo){
    $('#div_errores').html('No podemos reservar fechas en el pasado');
    document.getElementById(identificador + '_ok').innerHTML = '<img src="images/exclamation.png">';
    return false;
  }
  if (miFecha > a90dias){
    $('#div_errores').html('No admitimos reservas a más de 90 dias');  // jquery
    $('#mi_form').hide('slow');
    document.getElementById(identificador + '_ok').innerHTML = '<img src="images/exclamation.png">';
  }
  document.getElementById(identificador + '_ok').innerHTML = '<img src="images/tick.png">';
  
  let horaReserva = miFecha.getHours();
  if (horaReserva < 12 || horaReserva >= 23){
      $('#div_errores').html('Revise los horarios ');
    document.getElementById(identificador + '_ok').innerHTML = '<img src="images/exclamation.png">';
    return false;
  }
  if (horaReserva >= 16 && horaReserva <= 19 ){
      $('#div_errores').html('Revise los horarios');
    document.getElementById(identificador + '_ok').innerHTML = '<img src="images/exclamation.png">';
    return false;    
  }
  $('#div_errores').html('');
}

function verificar_todo(){
  'use strict';    
  var nombre = verificar_text('nombre');
  var telefono = verificar_text('telefono');
  var email = verificar_mail('email');
  var fecha = verificar_fecha('fecha');
  
  if(nombre && telefono && email && fecha){
    $('#div_errores').html('Gracias, vamos a procesar su reserva...');
    return true;
  } else {
    $('#div_errores').html('No se ha podido enviar su formulario...');
    return false;
  }
}
