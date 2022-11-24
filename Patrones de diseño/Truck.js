class Truck {

    constructor(placa) {
        this.placa = placa;
    }

    transportar(lugar) {
        console.log("El camión [" + this.placa + "] esta transportando el pedido a " + lugar);
    }

}

export default Truck;
