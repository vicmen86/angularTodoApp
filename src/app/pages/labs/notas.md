## Signal
Angular Signals es un sistema que rastrea de forma granular cómo y dónde se usa su estado en una aplicación, lo que permite que el marco optimice las actualizaciones de renderizado.

¿Qué son las signals?
Una signal es un envoltorio alrededor de un valor que notifica a los consumidores interesados ​​cuando ese valor cambia. Las signals pueden contener cualquier valor, desde primitivas simples hasta estructuras de datos complejas.

El valor de una signal se lee llamando a su función getter, que permite a Angular rastrear dónde se utiliza la signal.

Las signals pueden ser de escritura o de sólo lectura.

### Iterador de arrays *ngFor y condicional *ngIf 
Las directivas *ngIf y *ngFor son atributos que podemos agregarle a los elementos HTML que nos permiten en el caso del *ngIf condicionar si dicha marca debe agregarse a la página HTML. La directiva *ngFor nos permite generar muchos elementos HTML repetidos a partir del recorrido de un arreglo de datos.
