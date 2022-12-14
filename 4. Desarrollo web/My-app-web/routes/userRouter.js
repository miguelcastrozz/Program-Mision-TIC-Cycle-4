// localhost:3000/usuario/...

import express from "express";
import {readUserList} from "../../Wallet-app/controllers/userController";

const router = express.Router();

const usuario = {
    nombre: "Maria Jose",
    correo: "mariajose@gmail.com",
    edad: 15,
    notas: [
        3,
        4,
        4.8
    ],
    mascota: {
        nombre: "Calvin",
        raza: "Pitbull",
        edad: 7
    }
}

router.get("/", (req, res) => {
    res.json(usuario.mascota.edad);
});

router.get("/list", readUserList);

router.get("/mascota", (req, res) => {
    res.json(usuario.mascota);
});

router.get("/nombre", (req, res) => {
    res.json(usuario.nombre);
});

router.get("/agrupar", (req, res) => {
    res.send("Usted esta en el apartado agrupar");
});

router.get("/agrupar/:args", (req, res) => {
    let nombres = req.params.args; /*
    req: Extraer de la URL
    res: Respuesta que se le va a dar al usuario
    .params: Guarda los parámetros que pasan a la URL
    .split: Crea un arreglo con los elementos separados por el carácter que se le indique
    .args: El nombre del parámetro que se va a recibir
    .send: Enviar mensaje como respuesta al usuario
    .json: Enviar un objeto como respuesta al usuario */
    nombres = nombres.split(";");
    res.send(nombres);
});

router.get("/:nombre", (req, res) => {
    let nombre = req.params.nombre;
    res.json("Usted está buscando al usuario: " + nombre);
});

router.get("/:nombre/hola", (req, res) => { /*
    :variable: lo que me va a recibir como parámetro y req.params.nombre: lo que me va a devolver, / después de nombre para colocar otra dirección */
    let nombre = req.params.nombre;
    res.json("Usted está buscando al usuario: " + nombre);
});

router.get("/:nombre/:id", (req, res) => { /*
    :nombre: lo que me va recibir como parámetro y req.params.nombre: lo que me va a devolver */
    let nombre = req.params.nombre;
    let idUsuario = req.params.id;
    res.json({
        "Nombre de usuario": nombre,
        "ID de usuario": idUsuario
    });
});

export default router;
