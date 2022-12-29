import express from "express";
import transactionRouter from "./transactionRouter.js";
import userRouter from "./userRouter.js";
import loginRouter from "./LoginRouter.js";

const apiRouter = express.Router();

apiRouter.use("/login", loginRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/transaction", transactionRouter);

export default apiRouter;
