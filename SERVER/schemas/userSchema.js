const Joi = require("joi")

const userSchema = Joi.object({
  userId: Joi.string().required(),
});

module.exports = { userSchema }