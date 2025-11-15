
$(document).ready(function () {
  // ------------  FORMULARIO Y HEURÍSTICAS (Actualizado para consignas) ------------

  // 1) Referencias a los campos y al mensaje de estado
  var $nombre = $("#nombre");
  var $edad = $("#edad"); // Nuevo campo
  var $email = $("#email");
  var $comentario = $("#comentario"); // ID actualizado a comentario
  var $formStatus = $("#formStatus");

  // 2) Feedback inmediato: focus / blur
  $("#nombre, #edad, #email, #comentario").focus(function () {
    $(this).css("background-color", "#e0f7fa");
  });

  $("#nombre, #edad, #email, #comentario").blur(function () {
    $(this).css("background-color", "white");
  });

  // 3) Validación al hacer clic en Enviar
  $("#btnEnviar").click(function () {
    var hayError = false;
    var errores = []; // Para mostrar mensajes debajo de los campos si hay errores
    
    // Reset de bordes y mensajes antes de validar
    $nombre.css("border-color", "#cccccc");
    $edad.css("border-color", "#cccccc");
    $email.css("border-color", "#cccccc");
    $comentario.css("border-color", "#cccccc");
    $formStatus.text(""); // Limpiar mensaje de estado

    // Validaciones
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
    // Validar que contenga @ (solo si no está vacío)
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

    // Mensajes para el usuario (Cumple con mostrar mensajes si hay errores/campos vacíos y alerta de envío)
    if (hayError) {
      // Mostrar todos los errores
      $formStatus
        .html("Por favor, corregí los siguientes errores:<br/>- " + errores.join("<br/>- "))
        .css("color", "red");
    } else {
      // Mensaje de éxito
      $formStatus
        .text("¡Mensaje enviado exitosamente!") 
        .css("color", "green");
      
      // Limpiar el formulario y resetear bordes a gris después del éxito
      $("#contacto-form")[0].reset();
      $nombre.css("border-color", "#cccccc");
      $edad.css("border-color", "#cccccc");
      $email.css("border-color", "#cccccc");
      $comentario.css("border-color", "#cccccc");
    }
  });


  // ------------  CAMBIAR COLOR DEL SITIO + LOCALSTORAGE (para el Mdo Oscuro persistente) ------------

  var btnColorSitio = document.querySelector("#btnColorSitio");

  // Al cargar la página, leemos el valor guardado (persistencia)
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

      // Si ahora está activo, guardamos "on", sino "off"
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