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
