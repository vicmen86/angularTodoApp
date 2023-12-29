## Signal
Angular Signals es un sistema que rastrea de forma granular cómo y dónde se usa su estado en una aplicación, lo que permite que el marco optimice las actualizaciones de renderizado.

¿Qué son las signals?
Una signal es un envoltorio alrededor de un valor que notifica a los consumidores interesados ​​cuando ese valor cambia. Las signals pueden contener cualquier valor, desde primitivas simples hasta estructuras de datos complejas.

El valor de una signal se lee llamando a su función getter, que permite a Angular rastrear dónde se utiliza la signal.

Las signals pueden ser de escritura o de sólo lectura.
