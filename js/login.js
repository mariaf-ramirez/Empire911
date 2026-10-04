const loginForm = document.getElementById("loginForm");

if (
    sessionStorage.getItem("sesionEmpire911") === "activa"
) {
    window.location.replace("index.html");
}

loginForm.addEventListener("submit", function (event) {
    
    event.preventDefault();

    const correo =
        document.getElementById("correo").value.trim();


    const contrasena =
        document.getElementById("contrasena").value.trim();


    const mensaje =
        document.getElementById("mensaje-login");


    const correoCorrecto =
        "admin@empire911.com";


    const contrasenaCorrecta =
        "123456";


    if (
        correo === correoCorrecto &&
        contrasena === contrasenaCorrecta
    ) {


        sessionStorage.setItem(
            "sesionEmpire911",
            "activa"
        );

        window.location.replace("index.html");


    } else {


        mensaje.textContent =
            "Correo o contraseña incorrectos.";


        document.getElementById("contrasena").value = "";


    }

});