import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const accessToken = "";

app.listen(3000);
app.use(express.json);

// Autenticación (inicio de sesión)

const datosUsuarios = [];

app.post("/register", async (req, res) => {
    const { usuario, password } = req.body
    const salt = await bcrypt.genSalt(10) /* .genSalt: Diferenciar contraseñas, puede demorar mucho */
    const passwordEncriptada = await bcrypt.hash(password, salt) /* .hash: Encriptar contraseña */
    datosUsuarios.push({
        usuario,
        passwordEncriptada
    });
    res.status(200);
});

app.post("/login", async (req, res) => {
    const { usuario, password } = req.body
    const datosUsuario = datosUsuarios.filter({usuario});
    const acceso = await bcrypt.compare(password, datosUsuario.passwordEncriptada);
    if (acceso) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});

app.get("/", (req, res) => {
    res.json(datosUsuarios);
});

// 01:24:00
