// Clase que se encargará de realizar las recomendaciones de usuarios
export class Recomendador{
    constructor(usuarios){
        this.usuarios = usuarios
    }

    // Función que recomienda a un usuario otros usuarios según su "afinidad"
    recomendarUsuarios(usuario){
        // Diccionario que almacenará la afinidad del usuario con el resto
        let afinidad = new Map()

        // Calculamos los generos favoritos del usuario
        usuario.calcularGenerosFavoritos()
        usuario.generos_favoritos.push('POP')
        // Para cada usuario
        this.usuarios.forEach(usuario_a_evaluar => {
            // Nos aseguramos que no evaluamos al usuario consigo mismo
            if(usuario != usuario_a_evaluar){
                // Calculamos los generos favoritos del usuario a evaluar
                usuario_a_evaluar.calcularGenerosFavoritos()

                // Cantidad de generos coincidentes
                let generos_coincidentes = 0

                // Para cada genero del usuario a evaluar
                usuario_a_evaluar.generos_favoritos.forEach(genero => {

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
}
