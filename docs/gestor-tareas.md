# Elección del gestor de tareas
Como criterio de elección para el gestor de tareas que usaré en el proyecto usaré [Synk Advisor](https://snyk.io/advisor/), buscando obtuve las siguientes opciones:
    - grunt, con una nota de [85](https://snyk.io/advisor/npm-package/grunt), se presenta como un task runner para javascript seguro, con bastante influencia y una comunidad activa, pero su ultima release fue hace 7 meses.
    - gulp, tiene una nota de [79](https://snyk.io/advisor/npm-package/gulp), es un "streaming build system", el cual no utilizaré ya que su última realese fue hace 4 años, y tiene vulnerabildades.
    - pnpm, tambien planteo mi gestor de dependencias, el cual puede usarse tambien como gestor de tareas, con una nota de [98](https://snyk.io/advisor/npm-package/pnpm)

Luego nos quedan grunt y pnpm, entre ambos pnpm es el que mejor puntación tiene y aunque su función principal no sea ser un gestor de tareas, considero que este proyecto no necesita de tareas complejas que necesite de un gestor de tareas especifico, por lo que pnpm debería ser adecuado, por lo cual esa sería mi elección.