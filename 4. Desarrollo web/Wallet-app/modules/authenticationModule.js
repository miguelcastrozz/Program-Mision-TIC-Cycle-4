import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;

export function genToken(element) {
    return jwt.sign(element); /* .jwt = generar  token */
}

// Está conectado con authenticationService.js
export async function login(req, res) {
    try {
        const {name, password} = req.headers;
        const document = await userModel.findOne({name}); /*
        Busca un documento que tenga ese name
        Después si documento no existe
        Comparación de contraseña entre la contraseña que se envía y la que está en la base de datos */
        if (!document) return res.sendStatus(401);
        if (await bcrypt.compare(password, document.password)) {
            const token = genToken({_id: document._id});
            return res.status(200).json({token});
        }
        res.sendStatus(401);
    } catch (terrible) {
        res.status(400).json(terrible.message);
    }
}

export async function validateToken(req, res, next) {
    try {
        const {token} = req.headers;
        const _id = jwt.verify(token, privateKey)._id; /* token del header y la clave privada, y esto retorna un documento con la información del usuario como el ID, aquí también viene la IP */
        const document = await userModel.findById((_id)); /* Consulta a la base de datos para ver si el usuario existe */
        req.name = document.name; /* Guardar información del usuario en el request */
        next();
    } catch (e) {
        res.status(401).json(e.message);
    }
}
