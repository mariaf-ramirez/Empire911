const filtromarca = document.getElementById("filtromarca");
const filtroaño = document.getElementById("filtroaño");
const buscador = document.getElementById("buscador");

const tarjetas = document.querySelectorAll(".card");

function filtrarautos() {

    const marca = filtromarca.value;
    const año = filtroaño.value;
    const busqueda = buscador.value.toLowerCase();

    tarjetas.forEach(tarjeta => {

        const marcaauto = tarjeta.dataset.marca;
        const añoauto = tarjeta.dataset.año;
        const nombreauto = tarjeta.querySelector("h2").textContent.toLowerCase();

        const coincidemarca =
            marca === "" || marcaauto === marca;

        const coincideaño =
            año === "" || añoauto === año;

        const coincidebusqueda =
            busqueda === "" || nombreauto.includes(busqueda);

        if (coincidemarca && coincideaño && coincidebusqueda) {
            tarjeta.style.display = "";
        } else {
            tarjeta.style.display = "none";
        }

    });
}

filtromarca.addEventListener("change", filtrarautos);
filtroaño.addEventListener("change", filtrarautos);
buscador.addEventListener("input", filtrarautos);