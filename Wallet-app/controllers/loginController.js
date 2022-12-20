import bycrypt from "bycrypt";
import userModel from "../models/userModel.js";

export default async function login(req, res) {
    try {
        const { user, password } = req.headers;
        const documentoUsuario = await userModel.findOne({"nombre": user});
        if (documentoUsuario !== null) { /* Si documento no es nulo o vacío */
            const documentoPassword = documentoUsuario?.password; /* Si el documento no es nulo, accede a password
                                                                     Si la contraseña del header es la misma que la del documento, devuelve true, sino false */
            const authorized = await bycrypt.compare(password, documentoPassword);
            if (authorized === true) {
                res.json({"MENSAJE": "BIENVENIDO"})
            }
        } else {
            res.status(401);
        }
    } catch (e) {
        res.status(401).json(e.message);
    }
}
