/**
 * Crear un programa que imprima numeros impares
 */
let i = 0; /* Se inicializa una variable i en 0 para usarla
como contador. */
while (i <= 10) { /* Se abre un bucle while que se ejecutará
mientras i sea menor o igual a 10. */
    if (i % 2 !== 0) { /* Dentro del bucle se evalua si i es
    impar. Esto se hace con el operador módulo %, verificando
    si hay un resto diferente de 0. */
        console.log('impar', i); /* Si es impar, se imprimirá
        el texto 'impar' junto con el valor actual de i. */
    }
    i++; /* Se incrementa i en 1 para seguir iterando y analizando
    el siguiente número.*/
} /* Se cierra el bucle while cuando i llegue a 11. */
/* En resumen, este algoritmo itera desde 0 a 10 con el bucle while,
evaluando qué números son impares con el operador % e imprimiéndolos
en la consola.
Es una excelente opción para mostrar únicamente los números impares
en ese rango. */