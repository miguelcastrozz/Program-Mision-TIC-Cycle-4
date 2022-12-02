import Service from "./Service.js";
import ServiceAir from "./ServiceAir.js";

const servicioTerrestre1 = new Service();
const servicioTerrestre2 = new Service();
const servicioPlane1 = new ServiceAir();
const servicioPlane2 = new ServiceAir();

function enviarPaquete(servicio, lugar) {
    const transporte = servicio.obtenerTransporte();
    transporte.transportar(lugar);
}

enviarPaquete(servicioTerrestre1, "Bogotá");
enviarPaquete(servicioTerrestre2, "Medellin");
enviarPaquete(servicioPlane1, "Cali");
enviarPaquete(servicioPlane2, "Cartagena");
enviarPaquete(servicioPlane2, "Barranquilla");
