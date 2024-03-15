const Joi = require("joi");

const addFavoriteSchema = Joi.object({
  user: Joi.string().required(),
  imageUrl: Joi.string().uri().required(),
});

module.exports = { addFavoriteSchema }