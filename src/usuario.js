class Usuario{
    constructor(nickname, generos_favoritos){
        this.nickname = nickname, 
        this.generos_favoritos = generos_favoritos
    }
}

function calculaGenerosFavoritos(generos){
    const frecuencia_generos = {}
    generos.map(genero => {
        if(genero in frecuencia_generos){
            frecuencia_generos[genero] +=1
        }else{
            frecuencia_generos[genero] = 1
        }
    })
    
    const frecuencia_maxima = Math.max(...Object.values(frecuencia_generos))
    const generos_favoritos = []

    Object.keys(frecuencia_generos).map(genero => {
        frecuencia_generos[genero] === frecuencia_maxima ? generos_favoritos.push(genero) : null
    })

    const usuario = new Usuario(nickname,generos_favoritos)
    return usuario
}