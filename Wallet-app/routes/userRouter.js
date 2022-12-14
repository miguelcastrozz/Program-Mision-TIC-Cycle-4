import express from "express";
import {createUser, readUser, updateUser, deleteUser, readUserList} from "../controllers/userController.js"

const userRouter = express.Router();

// CRUD = END POINTS

userRouter.get("/mario", (req, res) => {
    res.send("SOY MARIO");
});

userRouter.get("/list", readUserList);

userRouter.post("/", (req, res) => {
    createUser(req, res);
}); // CREATE

userRouter.get("/:id", (req, res) => {
    readUser(req, res);
}); // READ

userRouter.patch("/:id", (req, res) => { /* put / patch */
    updateUser(req, res);
}); // UPDATE

userRouter.delete("/", (req, res) => {
    deleteUser(req, res);
}); // DELETE

export default userRouter;
