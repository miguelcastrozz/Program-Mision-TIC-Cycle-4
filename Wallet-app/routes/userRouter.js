import express from "express"
import { createUser, deleteUser, readUser, updateUser } from "../controllers/userController.js"

const userRouter = express.Router()

// CRUD

userRouter.post("/", (req, res) => {
    createUser(req, res);
})

userRouter.get("/", (req, res) => {
    readUser(res);
})

userRouter.patch("/", (req, res) => { // put / patch
    updateUser(res);
})

userRouter.delete("/", (req, res) => {
    deleteUser(res);
})

export default userRouter
