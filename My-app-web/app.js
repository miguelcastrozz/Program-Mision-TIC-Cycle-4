import express from "express";
import userRouter from "./routes/userRouter.js";
import homeRouter from "./routes/homeRouter.js";

const app = express(); /* Instancia de servidor (express) */
const puerto = 3000;

app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando");
});

app.get("/", (req, res) => { /* get: método http significa que es una petición, res = respuesta, send = Permite enviar un texto como respuesta de solicitud */
    res.send("Hola mundo");
});

app.get("/direction", (req, res) => {
    res.redirect("www.google.com"); /* redirect: Cambia /direction por www.google.com */
});

app.use(express.json()); /* express.json: Permite que el servidor entienda los datos que se envían en formato json */
app.use("/usuario", userRouter)
app.use("/home", homeRouter)
