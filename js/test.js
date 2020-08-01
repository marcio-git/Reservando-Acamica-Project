const expect = chai.expect;


describe('Testeo de la función reservarHorario', () => {
    let prueba1 = listadoDeRestaurantes[0];

    it('se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', () => {
        prueba1.reservarHorario('11:00');
        expect(prueba1.horarios).to.eql(['13:00', '15:30', '18:00'])
    });

    it('se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.', () => {
        prueba1.reservarHorario('');
        expect(prueba1.horarios).to.have.length(3)
    });

    it('se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.', () => {
        prueba1.reservarHorario('13:00');
        expect(prueba1.horarios).to.not.include('13:00')
        expect(prueba1.horarios).to.eql(['15:30', '18:00']);
    });
});

describe('Testeo de la función obtenerPuntuacion', () => {
    let prueba2 = listadoDeRestaurantes[1];

    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.', () => {
        expect(prueba2.obtenerPuntuacion()).to.equal(6.6)
    });

    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.', () => {
        prueba2.calificaciones.splice(0, prueba2.calificaciones.length)
        expect(prueba2.calificaciones).to.eql([])
    })
});

describe('Testeo de la función calificar', () => {
    let prueba3 = listadoDeRestaurantes[2];

    it("Como parametro se pasa un número de dos dígitos y la puntuación no cambia", function () {
        prueba3.calificar(10)
        expect(prueba3.obtenerPuntuacion()).to.equal(7);
    })

    it('Se pasa una nueva calificación y se espera un incremento del array', () => {
        const cantidadAnterior = prueba3.calificaciones.length;
        prueba3.calificar(9);
        expect(prueba3.calificaciones.length).to.equal(cantidadAnterior + 1)
    })
})

describe('Testo de la función buscarRestaurante', () => {
    const mensaje = listado.buscarRestaurante(0);
    it('Se pasa el id 4 y se espera que retorne el restaurante con el mismo id', () => {
        //listado.buscarRestaurante(4);
        expect(listado.buscarRestaurante(4)).to.equal(listadoDeRestaurantes[3])
    });

    it('Se pasa un número que no pertenezca a ningún restaurante y se retorna un mensaje', () => {
        expect(mensaje).to.be.a('string');
    })

    it('Se pasa como parametro "null"', () => {
        expect(listado.buscarRestaurante(null)).to.equal(mensaje)
    })
})

describe('Testeo de la función obtenerRestaurantes', () => {
    it('Dados los pametros del restaurante con id 5 se espera encuentrar ese restaurante', () => {
        const parametro = listado.obtenerRestaurantes('Asiática', 'Berlín', '12:00');
        expect(parametro[0]).to.equal(listadoDeRestaurantes[4])
    })

    it('Dados los parametros "null" se obtienen todos los Restaurantes', () => {
        expect(listado.obtenerRestaurantes(null, null, null).length).to.equal(listadoDeRestaurantes.length)
    })

    it('Dados los parametros que no coincidan con ningún restaurante la cantidad del arraglo de que retorna es igaul a 0', () => {
        expect(listado.obtenerRestaurantes('Desayuno', 'París', '11:00').length).to.equal(0)
    })
})

describe('Testeo a Reservar', () => {
    describe('Creación del objeto reserva1', () => {
        const reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")

        it('Calcula correctamente su precio base', () => {
            expect(reserva1.calcularPrecioBase()).to.equal(2800)
        })

        it('Ejecución del metodo adicionales', () => {
            expect(reserva1.adicionales()).to.equal(280)
        })

        it('Ejecución del metodo adicionlHorario', () => {
            expect(reserva1.adicionalHorario()).to.equal(0)
        })

        it('Ejecución del método descuentoGrupo', () => {
            expect(reserva1.descuentoGrupo()).to.equal(280)
        })
    })

    describe('Creación del objeto reserva2', () => {
        const reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")

        it('Calcula correctamente su precio final', () => {
            expect(reserva2.precioTotal()).equal(100)
        })

        it('Ejecución del métedo descuentos', () => {
            expect(reserva2.descuentos()).to.equal(200)
        })

        it('Ejecución del método descuentoCodigo', () => {
            expect(reserva2.descuentoCodigo()).to.equal(200)
        })

        it('Ejecución del método adicionalFinSemana', ()=>{
            expect(reserva2.adicionalFinDeSemana()).to.equal(0)
        })
    })
})