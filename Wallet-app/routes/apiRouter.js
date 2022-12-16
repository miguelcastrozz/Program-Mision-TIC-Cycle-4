import express from "express";
import transactionRouter from "./transactionRouter.js";
import userRouter from "./userRouter.js";
import testRouter from "./testRouter.js";
import loginRouter from "./LoginRouter.js";

const apiRouter = express.Router();

apiRouter.use("/transaction", transactionRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/test", testRouter);
apiRouter.use("/login", loginRouter);

export default apiRouter;
