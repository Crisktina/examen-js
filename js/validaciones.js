//------------------------------Validar formulario grupos
let error = false;
let mensajeObligatorio = "Campo obligatorio";
//-----Campo obligatorio
function validName() {
  const input = document.getElementById("nameInput");
  const divError = document.getElementById("invalid-name");
  if (input.value.trim().length == 0) {
    errorActive(divError, input, mensajeObligatorio);
    error = true;
  } else {
    success(divError, input);
  }
}
//la descripció
function censoredDescription() {
  const input = document.getElementById("descriptionInput");
  const divError = document.getElementById("invalid-description");
  // Addicionalment, es detectaran, al camp descripció, paraules 'malsonants' i es notificaran. Per fer-ho, s'utilitzarà un vector de paraules no permeses
  const censoredWords = ["word1", "word2", "word3"];
  const arrDesc = input.value.trim().split(" ");
  let isCensored = 0;
  console.log("****" + isCensored);
  censoredWords.forEach((element) => {
    if (arrDesc.includes(element)) {
      isCensored = 1;
    }
    //console.log("****" + arrDesc.includes(element));
  });
  console.log(isCensored);

  if (input.value.trim().length == 0) {
    errorActive(divError, input, mensajeObligatorio);
    error = true;
  } else if (isCensored === 1) {
    let mensaje = "Se han detectado palabras malsonantes no permitidas.";
    errorActive(divError, input, mensaje);
    error = true;
  } else {
    success(divError, input);
  }
}
//una URL per la imatge
function validURL() {
  const input = document.getElementById("urlInput");
  const divError = document.getElementById("invalid-URL");
  if (input.value.trim().length == 0) {
    errorActive(divError, input, mensajeObligatorio);
    error = true;
  } else {
    success(divError, input);
  }
}
//un mínim d’una etiqueta i un màxim de tres
function validarEtiquetas() {
  const input = document.getElementById("selectInput");
  const divError = document.getElementById("invalid-select");

  //convertir las opciones a un array:
  const inputs = input.selectedOptions;
  let arrSelects = [];
  for (let i = 0; i < inputs.length; i++) {
    //console.log(inputs[i].value);
    arrSelects.push(inputs[i].value);
  }
  //console.log(arrSelects);

  //validaciones del array
  if (arrSelects.length !== 0 && arrSelects.length <= 3) {
    success(divError, input);
  } else if (arrSelects.length == 0) {
    errorActive(divError, input, mensajeObligatorio);
    error = true;
  } else {
    let mensaje =
      "Solo puedes seleccionar un mínimo de 1 etiqueta y hasta máximo 3 etiquetas.";
    errorActive(divError, input, mensaje);
    error = true;
  }
}

// Activar error
function errorActive(divError, input, mensaje) {
  divError.innerHTML = mensaje;
  divError.style.display = "block";
  input.style.border = "2px solid red";
}

// Activar success
function success(divError, input) {
  divError.style.display = "none";
  input.style.border = "2px solid green";
}

let formulario = document.getElementById("miForm");

formulario.addEventListener("submit", (event) => {
  // Si no hay errores se envía el formulario
  if (!error) {
    alert("Se está enviando el formulario");
    formulario.submit();
  } else {
    event.preventDefault();
    event.stopPropagation();
  }
});
