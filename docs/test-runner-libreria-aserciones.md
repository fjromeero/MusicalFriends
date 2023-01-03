Para la elección del test runner y las librerias de aserciones tendré en cuenta las valoraciones que las distintas opciones tienen en [Snyk Advisor](https://snyk.io/advisor/).

Se evaluaran tanto test runner como testing frameworks que cuenten con test runner :
- jasmine: _testing framework_ cuenta con su propio test runner incorporado, cuenta con una puntuación de [92](https://snyk.io/advisor/npm-package/jasmine) 
- jest: un _testing framework_ muy completo, es una opcion muy popular ya que su _test runner_ cuenta con testeo paralelo, cuenta con una puntuación de [95](https://snyk.io/advisor/npm-package/jest) en el momento de la elección.
- ava: test runner que cuenta con una puntuación de [98](https://snyk.io/advisor/npm-package/ava)

 Dado que todas disponen de una puntación similar optaré por jest, ya que la usé con anterioridad en otro proyecto.

 En cuanto a las librerias de aserciones considerare tanto las propias librerias de aserciones como los test runners que contienen sus propias librerias integradas:
 - jasmine, jest, ava : los tres _testing frameworks_ cuentan con su propia libreria de aserciones integrada, con una puntuacion de [92](https://snyk.io/advisor/npm-package/jasmine), [95](https://snyk.io/advisor/npm-package/jest) y [98](https://snyk.io/advisor/npm-package/ava) respectivamente
 - chai, libreria de aserciones que sigue un acercamiento BDD/TDD lo cual quiere decir que su sintaxis tiende a ser similar al lenguaje humano, pero da opcion al usuario de elegir las palabras clave que quieran usar: should, expect o assert, cuenta con una puntuacion de [100](https://snyk.io/advisor/npm-package/chai) en Snyk

 Finalmente al igual que con el test tunner, se optara por usar la libreria de aserciones con la que el _testing framework_ Jest cuenta.