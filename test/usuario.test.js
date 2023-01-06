const {fromJSONToUsuario} = require('../src/usuario')

const datos_fran = require('../data/fran.json')
const datos_pepe = require('../data/pepe.json')
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