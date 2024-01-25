// cuáles son los números pares

let i = 0; /* declara una variable i la inicializa en 0 */
while (i < 10) { /* Inicia un bucle while que se ejecutará mientras i sea menor que 10 */
    if (i % 2 == 0) { /* Dentro del bucle, esta sentencia evalúa si i es par (residuo 0 al dividir por 2) */
        console.log('Número par', i); /* Si i es par, imprime su valor en la consola */
    } /* Cierra la sentencia if */
    i++; /* Incrementa i en 1 */
} /* Cierra el bucle while. */

console.log('Fuera del while'); /* Imprime un mensaje fuera del bucle, una vez que i llegó a 10. */