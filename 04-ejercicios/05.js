/*
Crear un programa que retorne el número menor
y mayor de un array.
*/
let array = [2, 5, 7, 15, 15, -5, -100, 55];
/* Define un array con varios elementos numéricos desordenados. */
function getMenorMayor(array) { /* Se declara la función
getMenorMayor() que recibe el array a procesar. */
	let menor = array[0];
	let mayor = array[0];
	/* Se inicializan dos variables:
       menor y mayor igual al primer elemento del array. */
	for (número of array) { /* Se itera el array completo, elemento
	por elemento, con un bucle for...of en la variable número. */
		menor = menor < número ? menor : número;
		mayor = mayor > número ? mayor : número;
}		/* 	En cada iteración se comparan menor y mayor con el
			número actual. Usando un operador ternario se va
			actualizando al valor mínimo o máximo según corresponda.
			Terminado el bucle tendremos los valores mínimo y máximo
			calculados.*/
	return [menor, mayor]; /* Se retorna un array con estos dos valores
			([menor, mayor]). */
}

let minMax = getMenorMayor(array);
console.log(minMax);
/* Se imprime array con [-100, 55] que son mayor y menor respectivamente. */