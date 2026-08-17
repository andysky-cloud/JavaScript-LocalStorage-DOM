let datos = JSON.parse(localStorage.getItem("paises")) || []

let registrar = () => {

    let nombre = document.getElementById("nombre").value
    let capital = document.getElementById("capital").value
    let continente = document.getElementById("continente").value
    let idioma = document.getElementById("idioma").value
    let bandera = document.getElementById("bandera").value

    let pais = {
        nombre: nombre,
        capital: capital,
        continente: continente,
        idioma: idioma,
        bandera: bandera
    }

    datos.push(pais)

    localStorage.setItem("paises", JSON.stringify(datos))

    console.log("País registrado")
}

let verPaises = () => {

    let contenedor = document.getElementById("paises")

    contenedor.innerHTML = ""

    let datosGuardados = JSON.parse(localStorage.getItem("paises")) || []

    for(let i = 0; i < datosGuardados.length; i = i + 1){

        let tarjeta = document.createElement("div")

        let imagen = document.createElement("img")
        imagen.src = datosGuardados[i].bandera
        imagen.width = 200

        let nombre = document.createElement("h2")
        nombre.textContent = datosGuardados[i].nombre

        let capital = document.createElement("p")
        capital.textContent = "Capital: " + datosGuardados[i].capital

        let continente = document.createElement("p")
        continente.textContent = "Continente: " + datosGuardados[i].continente

        let idioma = document.createElement("p")
        idioma.textContent = "Idioma: " + datosGuardados[i].idioma

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(capital)
        tarjeta.appendChild(continente)
        tarjeta.appendChild(idioma)

        contenedor.appendChild(tarjeta)
    }
}
