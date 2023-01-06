const {fromJSONToUsuario} = require('../src/usuario')

const datos_fran = require('../data/fran.json')
const datos_pepe = require('../data/pepe.json')

describe("Comprobacion de la creacion de un usuario" ,() =>{
    const fran = fromJSONToUsuario('Fran',datos_fran)
    const pepe = fromJSONToUsuario('Pepe',datos_pepe)

    it("Procesamiento de datos en JSON y calculo de generos favoritos",() => {
        expect(fran.generos_favoritos).toStrictEqual(['gym hardstyle'])
        expect(pepe.generos_favoritos).toStrictEqual(['urbano latino','gym hardstyle'])
    })
})