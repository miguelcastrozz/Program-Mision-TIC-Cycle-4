import TransactionModel from "../models/transactionModel.js";

export async function createTransaction(req, res) {
    try {
        const {transaction} = req.body;
        const document = await TransactionModel.create(transaction);
        res.status(201).json(document);
    } catch (terrible) {
        res.status(400).json(terrible.message);
    }
}

export async function readTransaction(req, res) {
    const {name} = req;
    try {
        const documents = await TransactionModel.find({
            $or: [ /* from o to tiene que ser igual a name */
                {from: name},
                {to: name}
            ]
        })
    res.status(200).json(documents)
    } catch (terrible) {
        res.status(400).json(terrible.message);
    }
}
