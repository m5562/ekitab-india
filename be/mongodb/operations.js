import { mongoConnect } from "./connection.js";
import UserCred from "./models/index.js";
import { createHash, compareHash } from "./../helpers/bcrypt.js";

mongoConnect();

const findUserByEmail = async (email) => {
  return await UserCred.findOne({ email });
};

const createUserByEmailAndPassword = async (name, email, password) => {
  const existingCustomer = await findUserByEmail(email);
  if (existingCustomer) {
    return { errMessage: "This email already exists." };
  }
  try {
    const hashedPassword = await createHash(password);
    const user = await new UserCred({
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
  const data = await UserCred.find();
  const allUserData = [];
  data.forEach((user) => {
    // console.log(data);
    allUserData.push({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      points: user.profile.points,
    });
    // console.log(allUserData);
  });
  return allUserData;
};
export { createUserByEmailAndPassword, findUserByEmail, findAllUser };
