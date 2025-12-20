import Joi from "joi";

function profileSchema() {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(30).messages({
      "string.min": "Name must be between 3 and 30 characters",
      "string.max": "Name must be between 3 and 30 characters",
    }),
    phone: Joi.string()
      .pattern(/^\d{11}$/)
      .required()
      .messages({
        "string.pattern.base": "Phone number must be 11 digits",
      }),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "This field must be in email shape",
      }),
  }).messages({
    "string.empty": "This field is required",
  });

  return schema;
}

export { profileSchema };
