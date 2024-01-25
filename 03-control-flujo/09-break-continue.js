let i = 0; /* Se declara e inicializa la variable i en 0. */
while (i < 6) { /* Se inicia un bucle while que se ejecutará mientras i sea menor a 6. */
    i++; /* Se incrementa i en 1 al final de cada iteración del bucle. */
    if (i === 2) {
        continue;
    } /* Con if se evalúa si i es igual a 2. Si es así, se ejecuta la sentencia continue
    que salta al siguiente ciclo del bucle sin ejecutar las siguientes líneas. */
    if (i === 4) {
        break;
    } /* Luego evaluamos si i es igual a 4. Si lo es, se ejecuta break para terminar/romper
    completamente la ejecución del bucle while. */
    console.log(i);
}
/* Si no se ejecutó continue ni break, finalmente imprime el valor actual de i en la consola.

Para resumir, este bucle imprimirá en consola los valores:
1
3

Al llegar a 2 se salta esa iteración con continue. Y en 4 se sale completamente del bucle con break. */
