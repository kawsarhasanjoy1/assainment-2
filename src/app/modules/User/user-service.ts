import { user } from "./user-interface";
import User from "./user-model";

const createUser = async (userData: user): Promise<user> => {
  const result = await User.create(userData);
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
  return result;
};

// creating order
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userUpOrder = async (id: string, upOrder: any) => {
  const userOrder = (await User.findById(id)) as user;
  if (!userOrder) {
    throw new Error("user not found");
  }
  if (!userOrder.Order) {
    userOrder.Order = [];
  } else {
    userOrder.Order.push(upOrder);
    const result = await User.findByIdAndUpdate(
      id,
      { $set: { Order: userOrder.Order } },
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
