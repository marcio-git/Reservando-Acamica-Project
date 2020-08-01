var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

/* ------------------- reservarHorario esta REFACTORIZADO ------------------- */

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    
    this.horarios = this.horarios.filter(horario => horario !== horarioReservado)
    /* for (var i = 0; i < this.horarios.length; i++) {
        if (this.horarios[i] === horarioReservado) {
            this.hoarios.splice(i, 1);
            return;
        }
    } */
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        /*var sumatoria = 0;
        for (var i = 0; i < this.calificaciones.length; i++) {
            sumatoria += this.calificaciones[i]
        }
        var promedio = sumatoria / this.calificaciones.length;
        return Math.round(promedio * 10) / 10;*/
        return this.promedio(this.calificaciones)
    }

}

/* ------------------- obtenerPuntuacion esta MODULARIZADO ------------------ */

Restaurant.prototype.promedio = function (calificacion) {
    let promedio = this.sumatoria(calificacion) / calificacion.length
    return Math.round(promedio * 10) / 10
}

Restaurant.prototype.sumatoria = function (calificacion) {
    let suma = 0;
    calificacion.forEach(e => suma += e);
    return suma;
}


