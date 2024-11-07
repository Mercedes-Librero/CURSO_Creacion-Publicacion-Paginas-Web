<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Documento sin título</title>
</head>

<body>
<input type="button" onClick="fn_crearcookie()" value="Crear cookie">
<input type="button" onClick="fn_leercookies()" value="Leer cookies">
</body>
<script>
  function fn_leercookies(){
    let galletitas = document.cookie.split(';');
    alert(galletitas[3]);
  }
  
  function fn_crearcookie(){
    document.cookie="variable=valor;max-age=3600;path/";
        document.cookie="variable1=valor1;max-age=3600;path/";
        document.cookie="variable2=valor2;max-age=3600;path/";
        document.cookie="variable3=valor3;max-age=3600;path/";
        document.cookie="variable4=valor4;max-age=3600;path/";
  }
  </script>
</html>