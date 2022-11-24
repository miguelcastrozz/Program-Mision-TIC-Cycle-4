import Servicio from "./Servicio";

const servicio = new Servicio;
servicio.generarID();

const truck = servicio.obtenerTransporte();
truck.transportar("Bogotá");
