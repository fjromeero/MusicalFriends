class Usuario{
    constructor(nickname, generos_favoritos){
        this.nickname = nickname, 
        this.generos_favoritos = generos_favoritos
    }
}

function fromJSONToUsuario(nickname, json){
    const total_generos = []
    if(json.items){
        json.items.map(item => {
            if(item.type === 'artist'){
                item.genres.map(genero => {
                    total_generos.push(genero)
                })
            }else{
                throw ("Error: el archivo no es de artistas")
            }
        })
    }else{
        throw ("Error: la sintaxis del archivo no es valida")
    }
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