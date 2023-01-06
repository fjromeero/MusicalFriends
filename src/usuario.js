class Usuario{
    constructor(nickname, generos_favoritos){
        this.nickname = nickname, 
        this.generos_favoritos = generos_favoritos
    }
}

function fromJSONToUsuario(nickname, json){
    const total_generos = []
    json.items.map(item => {
        item.genres.map(genero => {
            total_generos.push(genero)
        })
    })
    const usuario = new Usuario(nickname,calculaGenerosFavoritos(total_generos))
    return usuario
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

    return generos_favoritos
}