import mongoose from "mongoose";

const perfil = mongoose.Schema ({
    "mensaje": { type: String, required: true },
    "estado": String
});

const ciudadesPosibles = [ "Bogotá", "Cali", "Medellin", "Barranquilla", "Cartagena", "Bucaramanga" ];

function validationPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const userModel = mongoose.Schema({
    "nombre": { type: String,  required: true, minLength: 3, maxLength: 20 },
    "edad":   { type: Number,  required: true, mim: 14, max: 90, validate: { validator: validationPar, message: "La edad debe debe ser par" } }, /* En caso de no ser par, se muestra el mensaje */
    "ciudad": { type: String,  required: true, enum: ciudadesPosibles },
    "correo": { type: String,  required: false, default: "anonimo@correo.com", unique: "true" }, /* enum: Solo permite estos valores */
    "activo": { type: Boolean, required: false },
    "notas": {  type: Array,   required: false },
    "objeto": perfil,
    "fechaCreation": Date - 5
});

export default mongoose.model("users", userModel); /* Colección users */
