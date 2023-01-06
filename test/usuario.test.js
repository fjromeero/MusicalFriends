const {fromJSONToUsuario, recomiendaUsuarios} = require('../src/usuario')

const datos_fran = require('../data/fran.json')
const datos_pepe = require('../data/pepe.json')
const datos_angela = require('../data/angela.json')
const erroneo = require('../data/erroneo.json')

describe("Comprobacion de la creacion de un usuario" ,() =>{
    const fran = fromJSONToUsuario('Fran',datos_fran)
    const pepe = fromJSONToUsuario('Pepe',datos_pepe)

    it("Procesamiento de datos en JSON y calculo de generos favoritos",() => {
        expect(fran.generos_favoritos).toStrictEqual(['gym hardstyle'])
        expect(pepe.generos_favoritos).toStrictEqual(['urbano latino','gym hardstyle'])
    })
})

describe("Comprobacion de lanzamiento de excepciones", () => {
    it("Lanzamiento de excepcion cuando se intenta crear archivo a partir de un archivo erroneo", () => {
        expect(
            () => fromJSONToUsuario('',erroneo)
        ).toThrowError("Error: el archivo no es de artistas")
    })
})

describe("Comprobacion de la recomendacion de usuarios" ,() =>{
    const fran = fromJSONToUsuario('Fran',datos_fran)
    const pepe = fromJSONToUsuario('Pepe',datos_pepe)
    const angela = fromJSONToUsuario('Angela', datos_angela)

    it("Recomendacion",() => {
        expect(recomiendaUsuarios([fran,pepe,angela],fran)).toStrictEqual([pepe])
        expect(recomiendaUsuarios([fran,pepe,angela],pepe)).toStrictEqual([fran,angela])
        expect(recomiendaUsuarios([fran,pepe,angela],angela)).toStrictEqual([pepe])
    })
})
