<?php
// Crear conexion a MYSQUL
// Crear objeto que permite acceso a MYSQL
$ConexionBD = new mysqli ('localhost','usuarioweb','12345678', 'libreria');


// Comporbamos si ha errore
if (mysqli_connect_errno() > 0) {
  echo "C A G A D A";
  die();
}else{
  echo '<h1 style="background-color:F5CD57; height: 100px; text-align: center;"><br>CONEXION CORRECTA</h1>'; 
}

// Preparamos nuestra consulta SQL
$SQL = 'SELECT * FROM libros';

// Y la ejecutamos sobre la conexion a la BBDD
$registros = $ConexionBD->query($SQL);

echo 'Hemos recibido ' .$registros->num_rows. ' registros <br><br><hr><br>';

echo '<table width="50%">';
// recorremos todos los registros obtenidos
for ($i=0; $i<$registros->num_rows; $i++){
  //asociamos el puntero de lectura a la posicion
 $registro = $registros->fetch_assoc();
  // registro es una matriz con todos los datos
  echo '<tr><td width="10%">';  
  echo ($i+1);
  echo '</td><td width="20%">';  
  echo $registro['isbn'];
  echo '</td><td>';
  echo $registro['titulo'];
  echo '</td><td width="30%">';
  echo $registro['autor'];  
  
  echo '</td></tr>';
}
echo '</table>';

// Cerrar  BBDD
$ConexionBD->close() ;

?>
