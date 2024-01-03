import { z } from "zod";

const Order = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const userValidation = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number(),
  email: z.string(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  Orders: z.array(Order).optional(),
});

export default userValidation;
