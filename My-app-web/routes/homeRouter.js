// localhost:3000/home/...

import express from "express";
import { crearPublication, leerPublicaciones, leerPublication }  from "../controllers/homeController.js";

let router = express.Router();

router.get("/", (req, res) => {
    res.send("Estas en el apartado home");
});

router.get("/G01", (req, res) => {
    res.send("Bienvenido a la clase G01");
});

router.post("/nuevo", function (req, res) {
    crearPublication(req, res);
});

router.get("/lista", (req, res) => {
    leerPublicaciones(req, res)
});

router.get("/lista/:id", (req, res) => {
    leerPublication(req, res)
});

export default router;
