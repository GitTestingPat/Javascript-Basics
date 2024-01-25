let i = 2; /* Declara e inicializa la variable i en 2. */
while (i < 2) {
    if (i % 2 == 0) {
        console.log('Número par', i);
    }
    i++;
} /* El bucle while no se ejecuta porque i ya es 2. Todo su contenido se saltea. */

for (let i = 2;i < 10;i++) {
    if (i % 2 == 0) {
        console.log('Número par', i);
    }
}
/* Comienza un bucle for. Inicializa otra variable i en 2 como parte de la declaración
del bucle. Esta variable solo existe dentro de este bloque for.

La condición es que i debe ser menor a 10 para seguir iterando.

Dentro del bucle, verifica si i es par con el operador módulo %. Si es par, imprime el
mensaje con el valor actual de i.

Luego, se incrementa i en 1.

El bucle se repetirá mientras i siga siendo menor que 10. Por lo tanto imprimirá los
números pares del 2 al 8.

En resumen, este código imprime:

Número par 2
Número par 4
Número par 6
Número par 8 */