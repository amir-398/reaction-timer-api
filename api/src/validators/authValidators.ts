import Joi from "joi";

export const registerValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[!@#$%^&*])")) // Au moins une majuscule et un caractère spécial
    .required()
    .messages({
      "string.pattern.base":
        "Le mot de passe doit contenir au moins une majuscule et un caractère spécial.",
    }),
  role: Joi.boolean().default(false),
});

export const authValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
