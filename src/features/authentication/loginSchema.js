import Joi from "joi";

function loginSchema() {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "This field must be in email shape",
      }),
    password: Joi.string()
      .pattern(/^(?=.*[a-zA-Z])(?=.*\d).{4,20}$/)
      .required()
      .messages({
        "string.pattern.base":
          "Password must be 4-20 characters and include at least a letter and a number",
      }),
  }).messages({
    "string.empty": "This field is required",
  });

  return schema;
}

export { loginSchema };
