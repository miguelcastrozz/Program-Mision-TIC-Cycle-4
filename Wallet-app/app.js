import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("El servidor se está ejecutando correctamente.");
});

mongoose.connect("mongodb+srv://miguelcastrozz:5-n4QqR6dRVa_65@clusterchatu.tyhcscr.mongodb.net/wallet-app?retryWrites=true&w=majority", (err) => { /* Conexión al cluster */
    if (err) {
        console.log(err);
    } else {
        console.log("La base de datos se encuentra conectada.");
    }
});

app.use(express.json())
app.use("/user", userRouter)
