var Reserva = function (horario, cantPersonas, precioXpersona, codigoDesc) {
    this.horario = horario;
    this.cantPersonas = cantPersonas;
    this.precioXpersona = precioXpersona;
    this.codigoDesc = codigoDesc;
}

/* -------------------------------------------------------------------------- */
/*                        F·U·N·C·I·O·N·A·L·I·D·A·D·E·S                       */
/* -------------------------------------------------------------------------- */

Reserva.prototype.calcularPrecioBase = function () {
    return this.cantPersonas * this.precioXpersona
}

/* ------------------------- P·R·E·C·I·O  F·I·N·A·L ------------------------- */

Reserva.prototype.precioTotal = function () {
    return this.calcularPrecioBase() + this.adicionales() - this.descuentos()

}

/* --------------------------- D·E·S·C·U·E·N·T·O·S -------------------------- */

Reserva.prototype.descuentos = function () {
    return this.descuentoGrupo() + this.descuentoCodigo()
}

Reserva.prototype.descuentoGrupo = function () {
    if (this.cantPersonas >= 4 && this.cantPersonas <= 6) {
        return this.calcularPrecioBase() * 0.05
    } else if (this.cantPersonas >= 7 && this.cantPersonas <= 8) {
        return this.calcularPrecioBase() * 0.1
    } else if (this.cantPersonas > 8) {
        return this.calcularPrecioBase() * 0.15
    } else {
        return 0
    }
}

Reserva.prototype.descuentoCodigo = function () {
    
    if (this.codigoDesc == 'DES15') {
        return this.calcularPrecioBase() * 0.15;
    } else if (this.codigoDesc == 'DES200') {
        return 200;
    } else if (this.codigoDesc == 'DES1') {
        return this.precioXpersona;
    } else {
        return 0;
    }
    
    /* switch (this.codigoDesc) {
        case 'DES15':
            this.calcularPrecioBase() * 0.15
            break;
        case 'DES200':
            200
            break;
        case 'DES1':
            this.precioXpersona
            break;
        default: 0
    } */
}

/* -------------------------- A·D·I·C·I·O·N·A·L·E·S ------------------------- */

Reserva.prototype.adicionales = function () {
    return this.adicionalHorario() + this.adicionalFinDeSemana();
}

Reserva.prototype.adicionalHorario = function () {
    if (this.horario.getHours() == 13 || this.horario.getHours() == 20) {
        return this.calcularPrecioBase() * 0.05
    } else {
        return 0
    }
}

Reserva.prototype.adicionalFinDeSemana = function () {
    if (this.horario.getDay() == 5 || this.horario.getDay() == 6 || this.horario.getDay() == 0) {
        return this.calcularPrecioBase() * 0.10;
    } else {
        return 0
    }
}

