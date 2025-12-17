
$(document).ready(function () {
 

  var $nombre = $("#nombre");
  var $edad = $("#edad"); 
  var $email = $("#email");
  var $comentario = $("#comentario"); 
  var $formStatus = $("#formStatus");

 
  $("#nombre, #edad, #email, #comentario").focus(function () {
    $(this).css("background-color", "#e0f7fa");
  });

  $("#nombre, #edad, #email, #comentario").blur(function () {
    $(this).css("background-color", "white");
  });

  $("#btnEnviar").click(function () {
    var hayError = false;
    var errores = []; 
    
    $nombre.css("border-color", "#cccccc");
    $edad.css("border-color", "#cccccc");
    $email.css("border-color", "#cccccc");
    $comentario.css("border-color", "#cccccc");
    $formStatus.text(""); // Limpiar mensaje de estado

    
    if ($nombre.val().trim() === "") {
      hayError = true;
      $nombre.css("border-color", "red");
      errores.push("El campo 'Nombre y apellido' es obligatorio.");
    }
    

    if ($email.val().trim() === "") {
      hayError = true;
      $email.css("border-color", "red");
      errores.push("El campo 'Email' es obligatorio.");
    } 
    
    else if (!$email.val().includes("@")) {
      hayError = true;
      $email.css("border-color", "red");
      errores.push("El 'Email' debe contener @.");
    }

    if ($comentario.val().trim() === "") {
      hayError = true;
      $comentario.css("border-color", "red");
      errores.push("El campo 'Comentario' es obligatorio.");
    }

    
    if (hayError) {
     
      $formStatus
        .html("Por favor, corregí los siguientes errores:<br/>- " + errores.join("<br/>- "))
        .css("color", "red");
    } else {
      
      $formStatus
        .text("¡Mensaje enviado exitosamente!") 
        .css("color", "green");
      
     
      $("#contacto-form")[0].reset();
      $nombre.css("border-color", "#cccccc");
      $edad.css("border-color", "#cccccc");
      $email.css("border-color", "#cccccc");
      $comentario.css("border-color", "#cccccc");
    }
  });



  var btnColorSitio = document.querySelector("#btnColorSitio");


  var modoGuardado = localStorage.getItem("modo-oscuro");
  if (modoGuardado === "on") {
    document.body.classList.add("modo-oscuro");
    if (btnColorSitio) {
        btnColorSitio.textContent = "Modo Claro";
    }
  }

  if (btnColorSitio) {
    btnColorSitio.addEventListener("click", function () {
      document.body.classList.toggle("modo-oscuro");

    
      if (document.body.classList.contains("modo-oscuro")) {
        localStorage.setItem("modo-oscuro", "on");
        btnColorSitio.textContent = "Modo Claro";
      } else {
        localStorage.setItem("modo-oscuro", "off");
        btnColorSitio.textContent = "Modo Oscuro";
      }
    });
  }

});
