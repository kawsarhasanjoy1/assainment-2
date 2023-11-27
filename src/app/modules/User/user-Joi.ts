import Joi from "joi";

const userJoySchema = Joi.object({
  userId: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullName: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }).required(),
  age: Joi.number().required(),
  email: Joi.string().required().email(),
  isActive: Joi.boolean(),
  hobbies: Joi.array().items(Joi.string()).required(),
  address: {
    street: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  },
  Order: Joi.array().items(
    Joi.object({
      productId: Joi.string().required(),
      quantity: Joi.number().required(),
      price: Joi.number().required(),
    })
  ),
});


export default userJoySchema