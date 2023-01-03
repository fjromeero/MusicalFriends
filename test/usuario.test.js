const {Usuario, fromJSONToUsuario} = require('../src/usuario')
const datos_fran = require('../data/fran.json')
const datos_erroneos = require('../data/erroneo.json')

describe("Comprobación de los usuarios", () => {
    const fran = fromJSONToUsuario('Fran', datos_fran)
    
    it("Operaciones básicas del constructor y el procesamiento del JSON",() => {
        expect(fran.nickname).toBe("Fran");
        expect(fran.top_artistas[0].nombre).toBe("Echos");
        expect(fran.top_artistas[0].generos[0]).toBe("alt z");
        expect(fran.top_artistas[0].generos[1]).toBe("indie poptimism");
        expect(fran.top_artistas[9].nombre).toBe("Kidd Keo");
        expect(fran.generos_favoritos).toStrictEqual(["gym hardstyle"])
    })

    it("Excepciones en el constructor", () => {
        expect(
            () => fromJSONToUsuario("Error", datos_erroneos)
        ).toThrowError("Error: el archivo no es de artistas")
    })
})
