import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import testRouter from "./routes/testRouter.js";
import loginRouter from "./routes/LoginRouter.js";

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("SERVIDOR EJECUTANDO CORRECTAMENTE");
});

mongoose.connect("mongodb+srv://miguelcastrozz:5-n4QqR6dRVa_65@clusterchatu.tyhcscr.mongodb.net/wallet-app?retryWrites=true&w=majority", (err) => {
    if (err) {
        console.log("ERROR: " + err);
    } else {
        console.log("BASE DE DATOS CONECTADA CORRECTAMENTE");
    }
});

// MIDDLEWARES

app.use(cors({
    origin: "http://localhost:3000" /* Dando permisos a la app de React mediante su puerto 3000 */
}));
app.use(express.json());
app.use("/user", userRouter);
app.use("/test", testRouter);
app.use("/login", loginRouter);
