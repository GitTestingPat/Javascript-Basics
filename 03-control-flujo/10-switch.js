let acción = 'actualizar'; /* Se declara una variable acción con
el valor de string actualizar. */
switch (acción) { /* Se inicia una declaración switch pasándole
como parámetro la variable acción. */
    case 'listar':
        console.log('Acción de listar');
        break;
        /* Se evalúa si acción es estrictamente igual a 'listar'.
        En ese caso se ejecuta el console.log y luego la sentencia
        break corta la ejecución del switch. */
    case 'guardar':
        console.log('Acción de guardar');
        break; /* Aquí evaluamos si acción coincide con 'guardar',
        ejecutamos el registro y rompemos. */
    default:
        console.log('Acción no reconocida');
} /* Si no coincidió ningún case, se ejecuta el caso default para
atrapar cualquier otro valor de acción. Como acción era 'actualizar',
no coincide con ningún case y se imprime Acción no reconocida por el default.

El operador switch se utiliza para evaluar una expresión y ejecutar diferentes
códigos dependiendo del valor que coincida. Es útil cuando hay que comparar la
igualdad de una expresión con múltiples valores posibles.

Algunos puntos clave del operador switch:

- Compara la igualdad estricta (===) de una expresión contra los casos
- Permite evaluar condicionalmente la coincidencia con los casos
- Si hay coincidencia, ejecuta el código de ese caso
- Usa la sentencia break para detener la ejecución al encontrar un caso
- El caso default se ejecuta si ningún otro caso coincide

Ejemplos de uso:

- Evaluar opciones en un menú de usuario
- Detectar tipos de acción sobre un formulario
- Validar estados posibles de un pedido
- Comprobar valores exactos que puede tomar una variable

En resumen, switch es útil para reemplazar anidamientos profundos de sentencias
if/else y mejorar la legibilidad de evaluaciones contra múltiples valores específicos.

Las ventajas son evitar el anidamiento, estar obligado a manejar todos los casos y
forzar la ruptura con break.
*/
