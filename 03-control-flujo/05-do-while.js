// cuáles son los números pares

let i = 2; /* Declara la variable i y la inicializa en 2. */
while (i < 2) { /* Inicia un bucle while que se ejecutará mientras i sea menor que 2. Pero como i ya es 2,
este bucle no se ejecuta. */
    if (i % 2 == 0) {
        console.log('Número par', i);
    } /* Esta sentencia if chequea si i es par. Como está dentro del while que no se ejecuta, este código se saltea. */
    i++; /* Incrementa i en 1 al final de cada iteración. Pero como el bucle no se ejecuta, esta línea no hace nada. */
}

do {
	if (i % 2 == 0) {
		console.log('Número par', i);
	} /* Cierra la sentencia if */
	i++; /* Incrementa i en 1 */
} while (i < 2);
/* Este bucle sí se ejecuta una vez, ya que primero hace los cálculos
y evalúa la condición al final.
La sentencia if determina si i es par (ahora vale 3).
Luego i se incrementa a 4 dentro del bucle.
Pero como ahora i ya no es menor a 2, el bucle termina.
Así que en resumen, este código sólo imprime "Número par" una vez y finaliza. */