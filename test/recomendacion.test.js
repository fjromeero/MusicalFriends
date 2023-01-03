const {Usuario, fromJSONToUsuario, recomendarUsuarios} = require('../src/usuario')
const datos_fran = require('../data/fran.json')
const datos_pepe = require('../data/pepe.json')
const datos_angela = require('../data/angela.json')

describe("Comprobación del recomendador", () => {
    const fran = fromJSONToUsuario('Fran', datos_fran)
    const pepe = fromJSONToUsuario('Pepe',datos_pepe)
    const angela = fromJSONToUsuario('Angela', datos_angela)

    const usuarios = [fran,pepe,angela]

    const recomendados_fran = recomendarUsuarios(usuarios,fran)
    const recomendados_pepe = recomendarUsuarios(usuarios,pepe)
    const recomendados_angela = recomendarUsuarios(usuarios,angela)

    it("Recomendaciones: ", () => {
        expect(recomendados_fran).toStrictEqual([pepe])
        expect(recomendados_pepe).toStrictEqual([fran,angela])
        expect(recomendados_angela).toStrictEqual([pepe])
    })
})