// JavaScript Document
const img_tick = 'images/tick.png';
const img_error = 'images/exclamation.png';

function fn_veritext(idtext,minimo){
  let texto = $('#' + idtext).val();
  
  if(texto.length < minimo){
    //error
    $('#imagen_' + idtext).attr('src',img_error);
    return false;
  }else{
    //correcto
    $('#imagen_' + idtext ).attr('src',img_tick);
    return true;
  }
}

function fn_verinum(idtext,minimo,maximo){
  let numero = $('#' + idtext).val();
  
  if (isNaN(numero)){
    // No numero
    $('#imagen_' + idtext).attr('src',img_error);
    return false; 
  }
  
  if ((numero< minimo) || (numero > maximo)) {
    // error
    $('#imagen_' + idtext).attr('src',img_error);
    return false;    
  }

    $('#imagen_' + idtext ).attr('src',img_tick);   
    return true;  
}

function verificar_mail(email) {
  if (email == ''){
    return false;
  }
  
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  if(!regex.test(email)) {
    $('#imagen_email').attr('src',img_error);
    return false;
  } else {
    $('#imagen_email').attr('src',img_tick);
    return true;
  }
}

function comprobarFecha(idtext){
  let Fecha = $('#' + idtext).val();
  let miFecha = new Date(Fecha);
  let hoyMismo = new Date(); 
  let a90dias = new Date();
  a90dias.setDate(hoyMismo.getDate()+90);
  
  if (miFecha.getDay() == 1){
    $('#div_errores').html('');
    //Es lunes, esta cerrado
    $('#div_errores').html('No hay servicio los lunes');
    $('#imagen_' + idtext).attr('src',img_error);
    return false;
  }
  if (miFecha < hoyMismo){
    $('#div_errores').html('Error de fecha');
    $('#imagen_' + idtext).attr('src',img_error);
    return false;
  }
  if (miFecha > a90dias){
    $('#div_errores').html('Reservas maximo 90 dias');  // jquery
    $('#imagen_' + idtext).attr('src',img_error);
    return false;
  }
  
  let horaReserva = miFecha.getHours();
  if (horaReserva < 12 || horaReserva >= 23){
      $('#div_errores').html('Revise los horarios ');
    $('#imagen_' + idtext).attr('src',img_error);
    return false;
  }
  if (horaReserva >= 16 && horaReserva <= 19 ){
      $('#div_errores').html('Revise los horarios');
      $('#imagen_' + idtext).attr('src',img_error);
    return false;    
  }
  $('#imagen_' + idtext).attr('src',img_tick);  
  $('#div_errores').html('');
  return true;
}

function fn_verificacionfinal(){   
  let nombre = fn_veritext('nombre',3);
  let telefono = fn_verinum('telefono',600000000, 699999999);
  let email = verificar_mail($('#email').val());
  let fecha = comprobarFecha('fecha');
  let comensales = fn_verinum('comensales',1 ,20);  
  
  if(nombre && telefono && email && fecha && comensales){
    return true;
  } else {
    return false;
  }
}

// desplegar MAPA
function fn_verMapa(){
  $('#mapa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33726.07976127106!2d-0.8732476918467373!3d41.65590485911287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd596b24144a8331%3A0xa319d78a9e8ab18e!2sConsultor%C3%ADa%20y%20dise%C3%B1o%20web%20Wordpress%2C%20SEM%20Google%20Adwords%20y%20marketing%20en%20Zaragoza!5e0!3m2!1ses!2ses!4v1654685140403!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');

}