// CRUD

import userModel from "../models/userModel.js";

export async function createUser(req, res) {
    const { nombre, edad, ciudad } = req.body.usuario
    const user = await userModel.create({ /* .create= Crear un registro, "nombre" = nombre, await = esperar el resultado de la promesa */
        nombre,
        edad,
        ciudad
    })
    res.status(201).json(user)
    /*
    res.status(201) Algo fue creado
    res.json(user)
    */
}

export function readUser(res) {
    res.sendStatus(200);
}

export function updateUser(res) {
    res.sendStatus(200);
}

export function deleteUser(res) {
    res.sendStatus(200);
}
