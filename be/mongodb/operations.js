import { mongoConnect } from "./connection.js";
import { adminSchema, userSchema } from "./models/index.js";
import { createHash, compareHash } from "./../helpers/bcrypt.js";

mongoConnect();

const findUserByEmail = async (email) => {
  return await userSchema.findOne({ email });
};

const createUserByEmailAndPassword = async (name, email, password) => {
  const existingCustomer = await findUserByEmail(email);
  if (existingCustomer) {
    return { errMessage: "This email already exists." };
  }
  try {
    const hashedPassword = await createHash(password);
    const user = await new userSchema({
      name,
      email,
      password: hashedPassword,
      profile: {},
    });
    return await user.save();
  } catch (error) {
    return console.log(error);
  }
};

const findAllUser = async () => {
  const data = await userSchema.find();
  const allUserData = [];
  data.forEach((user) => {
    allUserData.push({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      points: user.profile.points,
    });
  });
  return allUserData;
};

const saveAdmin = async ({ email, name, password }) => {
  const data = await new adminSchema({ email, name, password });
  return await data.save();
};
export {
  createUserByEmailAndPassword,
  saveAdmin,
  findUserByEmail,
  findAllUser,
};
