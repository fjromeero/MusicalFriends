# Infraestructura Virtual - Francisco Javier Romero García Curso 2022-2023.
## Musical Friends 

### - Objetivos
  - [Objetivo 1](docs/Objetivos/Objetivo-1.md) 

 ---

### - Problema:

  El mundo de la música es muy amplio, y es posible como en mi caso que no compartas gustos musicales con tus amigos o más allegados, por lo que se puede volver complicado descubrir nueva música o conversar acerca de ella. Por ello surge Musical Friends.
  
### - Solución:
  
  A través del uso de la API de Spotify (una aplicación muy usada por el público) se podrá obtener los géneros más consumidos por el usuario y a partir de estos se le sugerirán otros usuarios.
 

 ### - Lógica de negocio
La lógica de negocio consiste en un algoritmo que evaluará y devolverá valores de cual es la compatibilidad de gustos entre el usuario y el resto y se los sugerirá a este. El algoritmo trabajará a partir de los géneros más escuchados por los usuarios.

 ### - Descripción usuarios producto
  [Personas](/docs/personas.md) que harán uso del producto
 
 ### - Planificación
  - [Historias de usuario y milestones](/docs/planteamiento.md)
  - [Gestor de dependencias](/docs/gestor-dependencias.md)
  - [Gestor de tareas](/docs/gestor-tareas.md)
  - [Test runner y libreria de aserciones](/docs/test-runner-libreria-aserciones.md)

  ### - Instalacion
  Una vez instalado ejecute:
  ```bash
  pnpm install
  ```

  Si desea comprobar si la sintaxis es correcta ejecute:
  ```bash
  pnpm run check
  ```
  ---
