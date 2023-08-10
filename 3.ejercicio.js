/**3. Realizar la suma de n numeros ingresados por el usuario.Julian Andres Moreno Rodriguez,Jairo Fabian martinez */
// suma de n numeros.


String: n = parseInt(prompt("Ingrese la cantidad de números a sumar:"));


String: suma = 0;


for (String (i) = 0; i < n; i++) {
    String: numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    suma += numero;
}

// Mostrar el resultado
console.log("La suma de los " + n + " números ingresados es: " + suma);
