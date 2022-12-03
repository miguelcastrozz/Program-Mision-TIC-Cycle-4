import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import testRouter from "./routes/testRouter.js";

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Servidor ejecutando correctamente");
});

mongoose.connect("mongodb+srv://miguelcastrozz:5-n4QqR6dRVa_65@clusterchatu.tyhcscr.mongodb.net/wallet-app?retryWrites=true&w=majority", (err) => {
    if (err) {
        console.log("ERROR: " + err);
    } else {
        console.log("Base de datos conectada correctamente");
    }
});

// MIDDLEWARES

app.use(express.json());
app.use("/user", userRouter);
app.use("/test", testRouter);
