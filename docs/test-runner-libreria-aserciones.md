Para la elección del test runner tendré en cuenta las valoraciones que las distintas opciones tienen en [Snyk Advisor](https://snyk.io/advisor/).
Las diferentes opciones que se evaluaron son las siguientes:
 - jest: un _testing framework_ muy completo que no solo cuenta con un _test runner_, si no que también incluye su propia _biblioteca de aserciones_, cuenta con una puntuación de [95](https://snyk.io/advisor/npm-package/jest) en el momento de la elección.
 - mocha: test runner que no cuenta con su propia biblioteca de aserciones, por lo que es necesario instalar una, cuenta con una puntuación de [95](https://snyk.io/advisor/npm-package/mocha).
 - ava: test runner que cuenta con una puntuación de [98](https://snyk.io/advisor/npm-package/ava)
 - jasmine: _testing framework_ que también cuenta con su propia biblioteca de aserciones, cuenta con una puntuación de [92](https://snyk.io/advisor/npm-package/jasmine) 

 Dado que todas disponen de una puntación similar optaré por jest, ya que la usé con anterioridad en otro proyecto.

 En cuanto a las bibliotecas de aserciones como se especificó anteriormente jest cuenta con su propia biblioteca de aserciones, por lo que usaré esa misma y optaré por no buscar otra.