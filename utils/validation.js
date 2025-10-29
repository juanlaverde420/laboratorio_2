const email = prompt("Escribe tu correo:");

if (validarEmail(email)) {
  alert("Correo válido ✅");
} else {
  alert("Correo inválido ❌");
}
