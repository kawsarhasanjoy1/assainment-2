/* eslint-disable @typescript-eslint/no-unused-vars */
import { user } from "./user-interface";
import User from "./user-model";
import userValidation from "./zod-validation";

const createUser = async (userData: Partial<user>) => {
  const user = userValidation.parse(userData);
  const result = await User.create(user);
  return result;
};
const getAllUser = async (): Promise<user[]> => {
  const result = await User.find();
  return result;
};
const getSingleUser = async (id: string): Promise<user | null> => {
  const result = await User.findById(id);
  return result;
};
const updatedSingleUser = async (
  id: string,
  upData: user
): Promise<user | null> => {
  const result = await User.findByIdAndUpdate(id, upData, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteSingleUser = async (id: string): Promise<user | null> => {
  const result = await User.findByIdAndDelete(id);
  return null;
};

// creating order
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userUpOrder = async (id: string, upOrder: any) => {
  const userOrder = (await User.findById(id)) as user;
  if (!userOrder) {
    throw new Error("user not found");
  }
  if (!userOrder.orders) {
    userOrder.orders = [];
  } else {
    userOrder.orders.push(upOrder);
    const result = await User.findByIdAndUpdate(
      id,
      { $set: { orders: userOrder.orders } },
      { new: true, runValidators: true }
    );
    return result;
  }
};

export const userService = {
  createUser,
  getAllUser,
  getSingleUser,
  updatedSingleUser,
  deleteSingleUser,
  userUpOrder,
};
