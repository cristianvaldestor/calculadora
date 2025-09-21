function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion == "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0){
             return "Error: no se puede dividir entre cero.";
        }
        return num1/num2;
    } else {
        return "Operacion no valida.";
    }
}
while (true) {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operacion (suma, resta, multiplicacion, division) o 'salir' para terminar:");

    if (operacion.toLowerCase() === "salir") {
        alert("¡Gracias por usar la calculadora!");
        break; // corta el bucle
    }
    let resultado = realizarOperacion(num1, num2, operacion.toLowerCase());
    alert("El resultado de la " + operacion+ " es: " + resultado);
}