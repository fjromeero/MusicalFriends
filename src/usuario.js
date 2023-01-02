const Artista = require('./artista')

/* Declaración clase Usuario */
class Usuario {
  constructor(nickname, json_artistas) {
    this.nickname = nickname;
    this.top_artistas = [];

    // Comprueba que la sintaxis del json es correcta
    if (json_artistas['items']) {

      // Para cada elemento del json en este caso artistas
      for (var i = 0; i < json_artistas['items'].length; i++) {
        // Nos aseguramos de que la sintaxis es correcta y el archivo efectivamente contienen= artistas
        if (json_artistas['items'][i].type != "artist") {
          // En otro caso lanzamos una excepción
          throw ("Error: el archivo no es de artistas")
        } else {
          let generos = [];
          // Para cada genero
          for (var n_genero = 0; n_genero < json_artistas['items'][i].genres.length; n_genero++) {
            // Añadimos los géneros al vector de géneros
            generos.push(json_artistas['items'][i].genres[n_genero])
          }
          // Creamos un artista con el nombre de este y sus géneros
          this.top_artistas.push(new Artista(json_artistas['items'][i].name, generos))
        }
      }

      // Calcula los géneros favoritos del usuario
      this.#calcularGenerosFavoritos()

    } else {
      // En caso de que la sintaxis del json no sea correcta lanza una excepción
      throw ("Error: el archivo de artistas no es válido")
    }
  }

  // Función que calcula los géneros favoritos del usuario
  #calcularGenerosFavoritos() {
    // Array de géneros favoritos de un usuario
    this.generos_favoritos = []

    // Umbral para que un género sea considerado como favorito
    let umbral = this.top_artistas.length / 2

    // Diccionario en el que se añadirá  los generos junto con su frecuencia
    let frecuencia_genero = new Map()

    // Para cada artista
    this.top_artistas.map(artista => {
      // Para cada genero que reprsenta un artista
      artista.generos.map(genero => {
        // Si en el diccionario se encuentra el género aumenta su frecuencia en 1 en otro caso se añade y se pone su frecuencia como 1
        if (frecuencia_genero.has(genero))
          frecuencia_genero.set(genero, frecuencia_genero.get(genero) + 1)
        else
          frecuencia_genero.set(genero, 1)
      })
    })

    // Para cada género 
    frecuencia_genero.forEach((frecuencia, genero) => {
      // Si la frecuencia del género se encuentra dentro del intervalo del umbral lo añade a los géneros favoritos
      if (frecuencia >= umbral)
        this.generos_favoritos.push(genero)
    })

    // Si ningún género supera el umbral
    if (this.generos_favoritos.length == 0) {
      // Como máximo valor de frecuencia de un género el primero género.
      let maxima_frecuencia = frecuencia_genero.values().next().value

      // Comprobamos y modificamos el máximo hasta obtener el mayor elemento
      frecuencia_genero.forEach((frecuencia, genero) => {
        if (frecuencia > maxima_frecuencia)
          maxima_frecuencia = frecuencia
      })

      // Añadimos los géneros con frecuencia igual a maxima_frecuencia
      frecuencia_genero.forEach((frecuencia, genero) => {
        if (frecuencia == maxima_frecuencia)
          this.generos_favoritos.push(genero)
      })
    }
  }
}

module.exports = Usuario;