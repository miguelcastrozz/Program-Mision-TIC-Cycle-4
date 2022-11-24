export default class Truck {

    constructor(id, conductor) {
        this.placa = id;
        this.connductor = conductor;
    }

    transportar(lugar) {
        console.log("El camión [" + this.placa + "] esta transportando el pedido a " + lugar + ", por medio terrestre");
    }

}
