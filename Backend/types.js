const zod = require("zod");

const createAcc = zod.object({
  email: zod.string().email("Invalid email address"),
  password: zod
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

const getAcc = zod.object({
  email: zod.string().email("Invalid email address"),
  password: zod
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

module.exports = {
  createAcc: createAcc,
  getAcc: getAcc,
};
