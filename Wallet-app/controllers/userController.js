import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export async function createUser(req, res) {
    try {
        const usuario = req.body.usuario;
        const { contrasenia } = usuario;
        const contraseniaEncriptada = await bcrypt.hash(contrasenia, 10); /* Encriptando la contraseña y la salt al mismo tiempo */
        usuario.contrasenia = contraseniaEncriptada;
        if (usuario === null) {
            res.status(400).json({ "error": "Falta objeto usuario en el cuerpo de la petición" });
            return;
        }
        const documento = await userModel.create(usuario);
        res.status(201).json(documento);
    } catch (variable) {
        res.status(400).json(variable.message);
        return;
    }
}

export async function readUser(req, res) {
    const id = req.params.id;
    let documento;
    try {
        documento = userModel.findOne({ "_id": id });
    } catch (variable) {
        res.status(400).json(variable.message); // TODO: Puede faltar un return [01:27:00]
    }
    res.status(200).json(documento);
}

export async function readUserList(req, res) {
    let documento;
    try {
        documento = userModel.find({}, {_id: 0, contrasenia: 0, __v: 0}); /* {} Filtro vacío, encontrara todos los documentos */
    } catch (variable) {
        res.status(400).json(variable.message);
    }
    res.status(200).json(documento);
}

export async function updateUser(req, res) {
    const id = req.params.id;
    const updates = req.body.updates;
    let documento;
    try {
        documento = await userModel.updateOne({ "_id": id }, updates, { runValidators: true });
    } catch (variable) {
        res.status(400).json(variable.message);
        return;
    }
    res.status(200).json(documento);
}

export async function deleteUser(req, res) {
    const id = req.body.id;
    let documento;
    try {
        documento = await userModel.deleteOne({ "_id": id });
    } catch (variable) {
        res.status(400).json(variable.message);
        return;
    }
    res.status(200).json(documento);
}
