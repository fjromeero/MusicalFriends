import { Artista } from "./artista.js";
/* Declaración clase Usuario */

class Usuario {
  constructor(nickname, json_artistas) {
    this.nickname = nickname;
    this.artistas = [];
    if(json_artistas['items']){
      for (var i = 0; i < json_artistas['items'].length; i++) {
        if (json_artistas['items'][i].type != "artist") {
          throw("Error: el archivo no es de artistas")
        } else {
          let generos = [];
          for (var n_genero = 0; n_genero < json_artistas['items'][i].genres.length; n_genero++) {
            generos.push(json_artistas['items'][i].genres[n_genero])
          }
          this.artistas.push(new Artista(json_artistas['items'][i].name, generos))
        }
      }
    }else{
      throw("Error: el archivo de artistas no es válido")
    }
  }
}