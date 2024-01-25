function suma(a, b) {
	console.log(arguments); /* Esta no es la mejor forma de acceder
	a todos los valores de los parametros en una función  */
	return a + b;
}

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);
/* IMPORTANTE: los Valores introducidos en la Función,
en este caso 5, y se ejecutan se llaman
'Argumentos'. Y las Referencias de Valores dentro de las
funciones, en este caso 'a' en línea 1, se llaman
'Parámetros'. */
/* Las funciones pueden recibir múltiples argumentos y
múltiples parámetros. */
