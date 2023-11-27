// import { Router } from "express";
import { userController } from "./user-controller";
import express from "express";

const userRouter = express.Router();

userRouter.post("/users", userController.createUser);
userRouter.get("/users", userController.getAllUser);
userRouter.get("/users/:userId", userController.getSingleUser);
userRouter.put("/users/:userId", userController.updateSingleUser);
userRouter.delete("/users/:userId", userController.deleteUser);
userRouter.put("/users/:userId/orders", userController.userUpOrder);
userRouter.get("/users/:userId/orders/total-price", userController.totalPrice);

export default userRouter;
