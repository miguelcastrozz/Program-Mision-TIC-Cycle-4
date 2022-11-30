import express from "express";
import UserRouter from "./routes/UserRouter.js";
import homeRouter from "./routes/home.js";

const app = express(); /* Instancia de servidor (express) */
const puerto = 3000;

app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando");
});

app.get("/", (req, res) => { /* get: método http significa que es una petición, res = respuesta  send = enviar, send = Permite enviar un texto como respuesta de solicitud */
    res.send("Hola mundo");
});

app.get("/direction", (req, res) => {
    res.redirect("www.google.com"); /* redirect: Cambia direction por www.google.com */
});

app.use(express.json()); /* json: Permite recibir y enviar datos en formato json */
app.use("/usuario", UserRouter)
app.use("/home", homeRouter)
