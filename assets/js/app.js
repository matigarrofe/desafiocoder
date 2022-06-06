let nombre = prompt("Ingrese su nombre por favor.")
alert(`Hola ${nombre} Como estas?`)
let edad = parseInt(prompt(`Que edad tienes?`))
if (edad >= 18) {
    alert(cliente())
} else {
    alert(`Usted tiene ${edad} años, NO PUEDES ACCEDER A LA VENTA`)
}


function cliente() {

    let importe = prompt("Bienvenido, Ingrese el importe del producto")
    let cantidad = prompt("Ingrese la cantidad del producto seleccionado")
    let iva = prompt("Seleccion de iva: 1 Con Iva - 2 Sin Iva")
    console.log("El importe a abonar es: ARS", cotizar(importe, cantidad, iva))
}

function cotizar(n1, n2, n3) {
    debugger
    switch (n3) {
        case "1":
            return (parseInt(n1) * parseFloat(n2) * 1.21)
        case "2":
            return parseInt(n1) * parseFloat(n2)
        default:
            return "Error, su seleccion es incorrecta."

    }
}