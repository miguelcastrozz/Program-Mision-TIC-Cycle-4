export default class Plane {

    constructor(id) {
        this.placa = id;
    }

    transportar(lugar) {
        console.log("El avión [" + this.placa + "] esta transportando el pedido a: " + lugar + ", por medio aéreo");
    }

}
