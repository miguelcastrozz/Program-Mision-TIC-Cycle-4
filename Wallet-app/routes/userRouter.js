import express from "express";
import {createUser, updateUser, deleteUser, readUserList} from "../controllers/userController.js"
import {login} from "../modules/authenticationModule.js";

const userRouter = express.Router();

// CRUD = END POINTS

userRouter.get("/list", readUserList);
userRouter.post("/", createUser);
userRouter.get("/", login )
userRouter.patch("/:id", updateUser);
userRouter.delete("/", deleteUser);

export default userRouter;
