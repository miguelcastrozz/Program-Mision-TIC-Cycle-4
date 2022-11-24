import Truck from "./Truck.js";

class Servicio {

    idServicio = 0;

    generarID() {
        this.idServicio = Math.random().toString(36).slice(2);
    }

    obtenerTransporte() {
        return new Truck(this.idServicio)
    }

}

export default Servicio;
