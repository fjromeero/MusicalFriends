/**
  * Declaración clase Usuario
 */

class Usuario
{
  /**
  *  @param {String} nombre //Nombre del usuario
  *  @param {String} apellidos //Apellidos del usuario
  *  @param {String} nickname //Nickname del usuario
  *  @param {int} edad 
  *  @param {String} ciudad
  *  @param {ArrayList{Genero}} generos//Generos escuchados por el usuario
  */
  
    constructor(nombre, apellidos, nickname, edad, ciudad, generos){
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.nickname = nickname;
      this.edad = edad;
      this.ciudad = ciudad;

      /**
        * No se si inicializar a nulo el array de generos escuchados, ya que no se como se añaden estos
        * Otra duda es si es mejor que la clase usuario guarden los generos o los generos guarden a los usuarios que los escuchan
      */
    }
}
