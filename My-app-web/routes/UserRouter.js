// localhost:3000/usuario/...

import express from "express";

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

router.get("/mascota", (req, res) => {
    res.json(usuario.mascota);
});

router.get("/nombre", (req, res) => {
    res.json(usuario.nombre);
});

export default router;
