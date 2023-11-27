/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { userService } from "./user-service";
import User from "./user-model";
import userJoySchema from "./user-Joi";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { error, value } = userJoySchema.validate(userData);
    if (error) {
      res.status(401).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found",
        },
      });
    }
    const result = await userService.createUser(userData);

    res.status(201).json({
      success: true,
      message: "User created successful",
      data: result,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found",
      },
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUser();
    res.status(200).json({
      success: true,
      message: "User fetched successful",
      data: result,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found",
      },
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await userService.getSingleUser(id);
    res.status(200).json({
      success: true,
      message: "single user fetched successful",
      data: result,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "single user not found",
      error: {
        code: 404,
        description: "single user not found",
      },
    });
  }
};

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const body = req.body;
    const result = await userService.updatedSingleUser(id, body);

    res.status(200).json({
      success: true,
      message: "user updated successful",
      data: result,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "single user not found",
      error: {
        code: 404,
        description: "single user not found",
      },
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.userId;
  const result = await userService.deleteSingleUser(id);
  res.status(200).json({
    success: true,
    message: "user deleted successful",
    data: result,
  });
};

const userUpOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const orderData = req.body;
    const result = await userService.userUpOrder(id, orderData);
    res.status(200).json({
      success: true,
      message: "order updated successful",
      Order: result,
    });
  } catch (err) {
    res.status(400).json({
      status: true,
      message: 'order update faild'
    })
  }
};

const totalPrice = async (req: Request, res: Response) => {
  const id = req.params.userId;
  const getById = await User.findById(id);
  const Order = getById?.Order;
  const totalPrice = Order?.reduce((price, crnPrice) => {
    return price + crnPrice.price * crnPrice.quantity;
  }, 0);


  res.status(200).json({
    success: true,
    message: "total price fetched successful",
    data: totalPrice,
  });
};

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateSingleUser,
  deleteUser,
  userUpOrder,
  totalPrice,
};
