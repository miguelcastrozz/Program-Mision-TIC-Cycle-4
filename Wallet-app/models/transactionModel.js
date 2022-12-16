import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    value: { type: Number, required: true, min: 1000 },
}, { timestamps: true }) /* timestamps: Crea dos campos en la base de datos, createdAt y updatedAt, que almacenan la fecha de creación y actualización de cada documento */

export default mongoose.model("transactions", transactionSchema);
