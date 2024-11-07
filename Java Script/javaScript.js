function fn_fecha(){
  var dias_semana = ['Domingo','Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado'];
  var meses_ano = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  
  var fecha = new Date();
  var dia = dias_semana[fecha.getDay()];
  var ndia = fecha.getDate();
  var mes = fecha.getMonth();
  var ano = fecha.getFullYear();
  var hora = fecha.getHours();
  var mins = fecha.getMinutes();
  var seg = fecha.getSeconds();
  
  return(dia + ', ' + ndia + ' de ' + mes + ' de ' + ano + ' ' + hora + ':' + mins + ':' + seg);
  
}

function fn_verificarpass(){
  var pass1 = document.getElementById('nueva_pass').value;
  var pass2 = document.getElementById('repite_pass').value;
  
  var numMovil = document.getElementById('movil').value;
  
  var miHTML = '';
  
  if (numMovil.length != 9) {
    miHTML = '<img src="images/fallado.png">';
  }else{
    miHTML = '<img src="images/correcto.png">';
  }
  
  
  if ((pass1.length < 8) || (pass1.length > 16) ) {
    miHTML = miHTML + '<p style="color:blue;">Error, la contraseña no tiene 8 caracteres</p>';
  } else {
      if (pass1 === pass2){
        miHTML = miHTML + '<p style="color:green;">Correcto</p>';
      }else{
        miHTML = miHTML + '<p style="color:red;">Error</p>';
      }
  }
  
  document.getElementById('msgbox_alertas').innerHTML = miHTML;
  
  
}
// FUNCIONES FORMULARIO
function comprobar(campo){
  var texto = document.getElementById(campo).value;
  
  if (texto.length == 0) {
    document.getElementById('msg_'+ campo).innerHTML = "Error";
  }else{
    document.getElementById('msg_'+ campo).innerHTML = "Correcto";
  }
}

function limpiar(campo){
  document.getElementById('msg_'+ campo).innerHTML = "";
}

function longitud(){
  var long = document.getElementById('comentario').value;
  
  if (long.length > 5) {
    long="";
  }
}

function verificar_checkacepto(){
  var acepta = document.getElementById('condiciones').checked;
  if (acepta == true) {
    document.getElementById('boton').style.visibility="visible";
  } else{
    document.getElementById('boton').style.visibility="hidden";
  }
}

// FUNCIONES FORMULARIO 2
function fn_leerRadiobuttons(nombre){
  "use strict";
  
  let oRBTNs = document.getElementsByName(nombre);
  
  for (let contador = 0; contador < oRBTNs.length; contador ++) {
    if (oRBTNs[contador].checked){
      return oRBTNs[contador].value;
    }
  }
  
}

// FUNCIONES FORMULARIO 3
function comprobarLong(identificador,longitud){
  let texto = document.getElementById(identificador).value;
  let long = longitud;
  //let cadena = tipo;
  
  if (texto.length != long){
        document.getElementById(identificador + '_correcto').style.visibility = "hidden";
        document.getElementById(identificador + '_error').style.visibility= "visible"; 
  }else{
        document.getElementById(identificador + '_correcto').style.visibility = "visible";
        document.getElementById(identificador + '_error').style.visibility= "hidden"; 
  }
}
