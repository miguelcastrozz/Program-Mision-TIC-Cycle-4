// localhost:3000/home/...

import express from "express";

let router = express.Router();

router.get("/", (req, res) => {
    res.send("Estas en el apartado home");
});

router.get("/G01", (req, res) => {
    res.send("Bienvenido a la clase G01");
});

let publicaciones = [];

router.post("/nueva", function (req, res){
    let id = Math.random().toString(36).slice(2);
    let publication = {
        "Nuestra publication": req.body.publicacion, /* Lo que salga en el body de la petición */
        "Identificador de la publication":id
    }
    res.json(publication);
    publicaciones.push(publication); /* push: Agrega un elemento al final del arreglo */
});


router.get("/lista", (req, res) => {
    res.json(publicaciones);
});

export default router;
