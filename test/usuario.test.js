const Usuario = require('../src/usuario')
const datos_fran = require('../../prueba/data/fran.json')

describe("Comprobación de los usuarios", () => {
    const fran = new Usuario("Fran", datos_fran);
    fran.calcularGenerosFavoritos();
    
    it("Operaciones básicas del constructor",() => {
        expect(fran.nickname).toBe("Fran");
        expect(fran.top_artistas[0].nombre).toBe("Echos");
        expect(fran.top_artistas[0].generos[0]).toBe("alt z");
        expect(fran.top_artistas[0].generos[1]).toBe("indie poptimism");
        expect(fran.top_artistas[9].nombre).toBe("Kidd Keo");
    })

    it("Funcionamiento calculo de los géneros favoritos", () => {
        expect(fran.generos_favoritos).toStrictEqual(["gym hardstyle"])
    })
})
