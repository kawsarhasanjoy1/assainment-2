import { Schema, model } from "mongoose";
import { user } from "./user-interface";
import bcrypt from "bcrypt";
import config from "../../config";
const Name = {
  firstName: { type: String },
  lastName: { type: String },
};

const Address = {
  street: { type: String },
  city: { type: String },
  country: { type: String },
};
const order = {
  productName: { type: String },
  price: { type: Number },
  quantity: { type: Number },
};

const userSchema = new Schema<user>({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  fullName: { type: Name, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: { type: Address, required: true },
  Order: [{ type: order, select: false }, { select: false }],
});

userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt));
  next();
});

userSchema.post("save", function (doc, next) {
  (doc.password = ""), next();
});

// 3. Create a Model.
const User = model<user>("User", userSchema);

export default User;
