// Nombre: ancho x alto
// 8K 7680 x 4320
// 4k 3840 x 2160
// WQHD 2560 x 1440
// FHD 1920 x 1080
// HD 1280 x 720
/*
Este código define una función llamada nameResolution que recibe dos parámetros
ancho y alto que representan el ancho y alto de resolución de una imagen o pantalla.
*/
function nameResolution(ancho, alto) {
	if (ancho >= 7680 && alto > 4320) {
		return '8K'; /* Compara si el ancho es mayor o igual a 7680px y alto mayor
		a 4320px. Si es así, retorna '8K' ya que corresponde a esa resolución. */
	} else if (ancho >= 3840 && alto > 2160) {
		return '4K'; /* Luego compara para la resolución 4K con sus valores de ancho
		y alto característicos. */
	} else if (ancho >= 2560 && alto > 1440) {
		return 'WQHD'; /* Sigue evaluando otros casos como WQHD, FHD, HD, comparando
		sus rangos de anchos y altos. */
	} else if (ancho >= 1920 && alto > 1080) {
		return  'FHD';
	} else if (ancho >= 1280 && alto > 720) {
		return 'HD';
	} else {
		return false; /* Si no coincide ningún caso, retorna false. */
	}
}

let resolution = nameResolution(1366, 768);
console.log(resolution);
/*
En resumen, esta función recibe una resolución de ancho x alto, compara con ranges
característicos y retorna el nombre de la resolución o false si no corresponde.
Para valores de 1366 x 768 px, retorna "HD"

Las líneas 30 y 31 se encuentran fuera de los paréntesis de la función nameResolution por una cuestión
de sintaxis y scope (alcance) de JavaScript.

Las funciones en JS definen un nuevo ámbito o scope. Todo lo que esté dentro de
sus llaves {} corresponde a ese scope local. En cambio, si escribimos código
fuera de esas llaves después de definir la función, ya nos encontramos nuevamente
en el scope global.

Al llamar nameResolution(1366, 768) estamos ejecutando esa función desde el scope global.
Todas las funciones y variables definidas dentro de nameResolution no están disponibles
fuera del scope global.

Luego, guardamos el resultado en una variable en el scope global resolution.

Finalmente podemos usar console.log también en el ámbito global para imprimir ese resultado.

Resumiendo, el llamado a la función y el uso de sus resultados se realiza fuera porque
pertenece al scope global, mientras que la definición de la función tiene su propio
ámbito local aislado.
*/
