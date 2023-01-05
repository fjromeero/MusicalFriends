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
    this.generos_favoritos = []

    let umbral = this.top_artistas.length / 2

    let frecuencia_genero = new Map()

    this.top_artistas.map(artista => {
      artista.generos.map(genero => {
        if (frecuencia_genero.has(genero))
          frecuencia_genero.set(genero, frecuencia_genero.get(genero) + 1)
        else
          frecuencia_genero.set(genero, 1)
      })
    })

    frecuencia_genero.forEach((frecuencia, genero) => {
      if (frecuencia >= umbral)
        this.generos_favoritos.push(genero)
    })

    if (this.generos_favoritos.length == 0) {
      let maxima_frecuencia = frecuencia_genero.values().next().value

      frecuencia_genero.forEach((frecuencia, genero) => {
        if (frecuencia > maxima_frecuencia)
          maxima_frecuencia = frecuencia
      })

      frecuencia_genero.forEach((frecuencia, genero) => {
        if (frecuencia == maxima_frecuencia)
          this.generos_favoritos.push(genero)
      })
    }
  }
}

function fromJSONToUsuario(nombre,json){

  if (json['items']) {

    let top_artistas = []

    for (var i = 0; i < json['items'].length; i++) {
      if (json['items'][i].type != "artist") {
        throw ("Error: el archivo no es de artistas")
      } else {
        let generos = [];
        for (var n_genero = 0; n_genero < json['items'][i].genres.length; n_genero++) {
          generos.push(json['items'][i].genres[n_genero])
        }
        top_artistas.push(new Artista(json['items'][i].name, generos))
      }
    }

    const usuario = new Usuario(nombre,top_artistas)

    return usuario

  } else {
    throw ("Error: el archivo de artistas no es válido")
  }
}

function recomendarUsuarios(usuarios, usuario){
  let afinidad = new Map()

  // Para cada usuario
  usuarios.map(usuario_a_evaluar => {
      if(usuario != usuario_a_evaluar){

          let generos_coincidentes = 0

          usuario_a_evaluar.generos_favoritos.map(genero => {

              if(usuario.generos_favoritos.includes(genero)){
                  generos_coincidentes = generos_coincidentes + 1
              }
          })

          afinidad.set(usuario_a_evaluar,generos_coincidentes/usuario.generos_favoritos.length)
      }
  });

  let max_afinidad = 0     
      
  // Para cada usuario
  afinidad.forEach((porcentaje,usuario) => {
      if(porcentaje > max_afinidad){
          max_afinidad = porcentaje
      }
  })

  let usuarios_recomendados = []  

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