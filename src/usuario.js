const Artista = require('./artista')

/* Declaración clase Usuario */
class Usuario {
  constructor(nickname, top_artistas) {
    this.nickname = nickname;
    this.top_artistas = top_artistas;
    this.#calcularGenerosFavoritos()
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

function fromJSONToUsuario(nombre,json){

  // Comprueba que la sintaxis del json es correcta
  if (json['items']) {

    let top_artistas = []

    // Para cada elemento del json en este caso artistas
    for (var i = 0; i < json['items'].length; i++) {
      // Nos aseguramos de que la sintaxis es correcta y el archivo efectivamente contienen= artistas
      if (json['items'][i].type != "artist") {
        // En otro caso lanzamos una excepción
        throw ("Error: el archivo no es de artistas")
      } else {
        let generos = [];
        // Para cada genero
        for (var n_genero = 0; n_genero < json['items'][i].genres.length; n_genero++) {
          // Añadimos los géneros al vector de géneros
          generos.push(json['items'][i].genres[n_genero])
        }
        // Creamos un artista con el nombre de este y sus géneros
        top_artistas.push(new Artista(json['items'][i].name, generos))
      }
    }

    // Creamos el usuario con los datos
    const usuario = new Usuario(nombre,top_artistas)

    // Devolvemos el usuario
    return usuario

  } else {
    // En caso de que la sintaxis del json no sea correcta lanza una excepción
    throw ("Error: el archivo de artistas no es válido")
  }
}

// Función que recomienda a un usuario otros usuarios según su "afinidad"
function recomendarUsuarios(usuarios, usuario){
  // Diccionario que almacenará la afinidad del usuario con el resto
  let afinidad = new Map()

  // Para cada usuario
  usuarios.map(usuario_a_evaluar => {
      // Nos aseguramos que no evaluamos al usuario consigo mismo
      if(usuario != usuario_a_evaluar){

          // Cantidad de generos coincidentes
          let generos_coincidentes = 0

          // Para cada genero del usuario a evaluar
          usuario_a_evaluar.generos_favoritos.map(genero => {

              // Si comparte genero con el usuario se suma 1 a los generos coincidentes
              if(usuario.generos_favoritos.includes(genero)){
                  generos_coincidentes = generos_coincidentes + 1
              }
          })

          // Añadimos el usuario y su porcentaje de afinidad al diccionario
          afinidad.set(usuario_a_evaluar,generos_coincidentes/usuario.generos_favoritos.length)
      }
  });

  // Una vez calculada la afinidad con cada usuario
  let max_afinidad = 0    // Maxima afinidad encontrada
      
  // Para cada usuario
  afinidad.forEach((porcentaje,usuario) => {
      // Si se encuentra una afinidad mayor se cambia
      if(porcentaje > max_afinidad){
          max_afinidad = porcentaje
      }
  })

  let usuarios_recomendados = []  // Array (vacio) para los usuarios recomendados

  // Añadimos los usuarios cuya afinidad sea igual a max_afinidad si max_afinidad es mayor o igual que 0,5
  if(max_afinidad>= 0,5){
      afinidad.forEach((porcentaje,usuario) => {
          if(porcentaje==max_afinidad){
              usuarios_recomendados.push(usuario)
          }
      })
  }

  return usuarios_recomendados
}

module.exports = {Usuario,fromJSONToUsuario,recomendarUsuarios};