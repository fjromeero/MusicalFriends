Los datos han sido obtenidos de [Snyk Advisor](https://snyk.io/advisor/)
Para la elección del test runner y las librerias de aserciones tendré en cuenta su popularidad y su mantenimiento:

Se evaluaran tanto test runner como testing frameworks que cuenten con test runner :
- jasmine: _testing framework_ cuenta con su propio test runner incorporado, cuenta con un total de un millon de descargas semanales y su ultimo commit fue hace 2 meses 
- jest: un _testing framework_ muy completo, es una opcion muy popular ya que su _test runner_ cuenta con testeo paralelo, en el momento de la busqueda tiene  un total de mas de 10 millones de descargas semanales y su ultimo commit fue hace 1 dia.
- ava: test runner que cuenta con un total de 192.000 descargas semanales y su ultimo commit fue hace 22 dias.

 Por lo cual se optara por jest ya que cuenta con un gran diferencia de popularidad con respecto las otras evaluadas

 En cuanto a las librerias de aserciones considerare tanto las propias librerias de aserciones como los test runners que contienen sus propias librerias integradas:
 - jasmine, jest: los dos _testing framework_ descritos en el apartado anterior cuentan con su propia libreria de aserciones.
 - chai, libreria de aserciones que sigue un acercamiento BDD/TDD lo cual quiere decir que su sintaxis tiende a ser similar al lenguaje humano, pero da opcion al usuario de elegir las palabras clave que quieran usar: should, expect o assert, cuenta con un total de casi 3 millones de descargas semanales y un mantenimiento positivo.
 - expect.js, un libreria de aserciones TDD basada en should.js con un total de mas de 56.000 descargas, pero lleva sin actualizarse desde hace mucho tiempo. 

 Finalmente al igual que con el test tunner, se optara por usar la libreria de aserciones con la que el _testing framework_ Jest cuenta.