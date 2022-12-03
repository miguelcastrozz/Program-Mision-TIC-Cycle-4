import userModel from "../models/userModel.js";

export async function createUser(req, res) { /*
    const { nombre, edad, ciudad } = req.body.usuario; YA NO ES NECESARIO */
    const usuario = req.body.usuario;
    if (usuario == null) {
        res.status(400).json({ "error": "Falta objeto usuario en el cuerpo de la petición" });
        return;
    }
    let documento;
    try {
        documento = await userModel.create(usuario);
    } catch (variable) {
        res.status(400).json(variable.message);
        return;
    }
    res.status(201).json(documento);
}

export async function readUser(req, res) {
    const id = req.params.id;
    let documento;
    try {
        documento = userModel.findOne({ "_id": id });
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
        documento = await userModel.updateOne({ "_id": id }, updates);
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
