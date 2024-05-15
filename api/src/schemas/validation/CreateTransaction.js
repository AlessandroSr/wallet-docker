import Joi from "joi";

export const CreateTransaction = Joi.object({
  value: Joi.number().required(),
  description: Joi.string().required().min(3),
  type: Joi.string().required().valid("Entrada", "Saida"),
  userId: Joi.object(),
  createdAt: Joi.string(),
});
