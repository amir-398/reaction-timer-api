import Joi from "joi";

export const timeValidators = Joi.object({
  time: Joi.number().required(),
});
