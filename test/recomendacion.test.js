const Recomendador = require('../src/recomendador')
const Usuario = require('../src/usuario')
const datos_fran = require('../data/fran.json')
const datos_pepe = require('../data/pepe.json')
const datos_angela = require('../data/angela.json')

describe("Comprobación del recomendador", () => {
    const fran = new Usuario('Fran',datos_fran) 
    const pepe = new Usuario('Pepe',datos_pepe)
    const angela = new Usuario('Angela', datos_angela)


    const recomendador = new Recomendador([fran, pepe, angela])

    const recomendados_fran = recomendador.recomendarUsuarios(fran)
    const recomendados_pepe = recomendador.recomendarUsuarios(pepe)
    const recomendados_angela = recomendador.recomendarUsuarios(angela)

    it("Constructor: ", () => {
        expect(recomendador.usuarios).toStrictEqual([fran, pepe, angela])
        expect(recomendados_fran).toStrictEqual([pepe])
        expect(recomendados_pepe).toStrictEqual([fran,angela])
        expect(recomendados_angela).toStrictEqual([pepe])
    })
})