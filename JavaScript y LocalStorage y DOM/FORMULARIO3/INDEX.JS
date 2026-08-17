let datos = JSON.parse(localStorage.getItem("animales")) || []

let registrar = () => {

    let nombre = document.getElementById("nombre").value
    let especie = document.getElementById("especie").value
    let edad = document.getElementById("edad").value
    let habitat = document.getElementById("habitat").value
    let imagen = document.getElementById("imagen").value

    let animal = {
        nombre: nombre,
        especie: especie,
        edad: edad,
        habitat: habitat,
        imagen: imagen
    }

    datos.push(animal)

    localStorage.setItem("animales", JSON.stringify(datos))

    console.log("Animal registrado")
}

let verAnimales = () => {

    let contenedor = document.getElementById("animales")

    contenedor.innerHTML = ""

    let datosGuardados = JSON.parse(localStorage.getItem("animales")) || []

    for(let i = 0; i < datosGuardados.length; i = i + 1){

        let tarjeta = document.createElement("div")

        let imagen = document.createElement("img")
        imagen.src = datosGuardados[i].imagen
        imagen.width = 200

        let nombre = document.createElement("h2")
        nombre.textContent = datosGuardados[i].nombre

        let especie = document.createElement("p")
        especie.textContent = "Especie: " + datosGuardados[i].especie

        let edad = document.createElement("p")
        edad.textContent = "Edad: " + datosGuardados[i].edad

        let habitat = document.createElement("p")
        habitat.textContent = "Hábitat: " + datosGuardados[i].habitat

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(especie)
        tarjeta.appendChild(edad)
        tarjeta.appendChild(habitat)

        contenedor.appendChild(tarjeta)
    }
}