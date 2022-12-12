import express  from "express";
import login from "../controllers/LoginController.js";

const loginRouter = express.Router();

loginRouter.get("/", login) /* Alternativa: loginRouter.get("/", (req, res) => { res.send("Hola") }) */

export default loginRouter;
