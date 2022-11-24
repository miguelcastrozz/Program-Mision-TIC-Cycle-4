import Truck from "./Truck.js";

class Service {

    idServicio = 0;

    constructor() { /* Cada vez que se hace una instancia de Service se genera un ID */
        this.generarID();
    }

    generarID() {
        this.idServicio = Math.random().toString(36).slice(2);
    }

    obtenerTransporte() {
        return new Truck(this.idServicio)
    }

}

export default Service;
