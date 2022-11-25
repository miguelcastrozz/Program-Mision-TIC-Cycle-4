import express from "express";

const app = express(); /* Instancia de servidor (express) */
const puerto = 3000;

app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando");
});

app.get("/", (req, res) => { /* get: método http significa que es una petición, res = respuesta  send = enviar */
    res.send("Hola mundo");
});

app.get("/home", (req, res) => {
    res.send("Estas en el apartado home");
});

app.get("/home/G01", (req, res) => {
    res.send("Bienvenido a la clase G01");
});
