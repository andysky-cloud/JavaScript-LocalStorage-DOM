let datos = JSON.parse(localStorage.getItem("departamentos")) || []

let registrar = () => {

    let nombre = document.getElementById("nombre").value
    let responsable = document.getElementById("responsable").value
    let empleados = document.getElementById("empleados").value
    let ubicacion = document.getElementById("ubicacion").value
    let imagen = document.getElementById("imagen").value

    let departamento = {
        nombre: nombre,
        responsable: responsable,
        empleados: empleados,
        ubicacion: ubicacion,
        imagen: imagen
    }

    datos.push(departamento)

    localStorage.setItem("departamentos", JSON.stringify(datos))

    console.log("Departamento registrado")
}

let verDepartamentos = () => {

    let contenedor = document.getElementById("tabla")

    contenedor.innerHTML = ""

    let datosGuardados = JSON.parse(localStorage.getItem("departamentos")) || []

    let tabla = document.createElement("table")

    tabla.style.border = "1px solid black"

    let encabezado = document.createElement("tr")

    let tituloImagen = document.createElement("th")
    tituloImagen.textContent = "Imagen"

    let tituloNombre = document.createElement("th")
    tituloNombre.textContent = "Departamento"

    let tituloResponsable = document.createElement("th")
    tituloResponsable.textContent = "Responsable"

    let tituloEmpleados = document.createElement("th")
    tituloEmpleados.textContent = "Empleados"

    let tituloUbicacion = document.createElement("th")
    tituloUbicacion.textContent = "Ubicación"

    encabezado.appendChild(tituloImagen)
    encabezado.appendChild(tituloNombre)
    encabezado.appendChild(tituloResponsable)
    encabezado.appendChild(tituloEmpleados)
    encabezado.appendChild(tituloUbicacion)

    tabla.appendChild(encabezado)

    for(let i = 0; i < datosGuardados.length; i = i + 1){

        let fila = document.createElement("tr")

        let celdaImagen = document.createElement("td")
        let imagen = document.createElement("img")

        imagen.src = datosGuardados[i].imagen
        imagen.width = 100

        celdaImagen.appendChild(imagen)

        let celdaNombre = document.createElement("td")
        celdaNombre.textContent = datosGuardados[i].nombre

        let celdaResponsable = document.createElement("td")
        celdaResponsable.textContent = datosGuardados[i].responsable

        let celdaEmpleados = document.createElement("td")
        celdaEmpleados.textContent = datosGuardados[i].empleados

        let celdaUbicacion = document.createElement("td")
        celdaUbicacion.textContent = datosGuardados[i].ubicacion

        fila.appendChild(celdaImagen)
        fila.appendChild(celdaNombre)
        fila.appendChild(celdaResponsable)
        fila.appendChild(celdaEmpleados)
        fila.appendChild(celdaUbicacion)

        tabla.appendChild(fila)
    }

    contenedor.appendChild(tabla)
}