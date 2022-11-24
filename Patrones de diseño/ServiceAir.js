import Plane from "./Plane.js";
import Service from "./Service.js";

export default class ServiceAir extends Service {

    constructor() {
        super();
    }

    obtenerTransporte() {
        return new Plane(this.idServicio);
    }

}
