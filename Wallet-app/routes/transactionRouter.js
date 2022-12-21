import express from "express";
import {createTransaction, readTransaction} from "../controllers/transactionController.js";
import {validateToken} from "../modules/authenticationModule.js";

const transactionRouter = express.Router();

transactionRouter.post("/", createTransaction)
transactionRouter.get("/", validateToken, readTransaction) /* Cuando se lee una transacción, sé válida el token */

export default transactionRouter;

// createTransaction ...... Implementación de la función
// createTransaction() .... Ejecución de la función
