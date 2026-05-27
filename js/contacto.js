const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_k3ox9ky", "template_brgjxzf", {
    name: document.getElementById("nombre").value,
    email: document.getElementById("correo").value,
    phone: document.getElementById("telefono").value,
    message: document.getElementById("mensaje").value
  })
  .then(function() {
    alert("Mensaje enviado correctamente");
    formulario.reset();
  })
  .catch(function(error) {
    console.log(error);
    alert("Error al enviar");
  });
});