import { compareHash } from "../helpers/bcrypt.js";
import { findUserByEmail } from "./../mongodb/operations.js";

const loginWithEmailAndPassword = async (email, password) => {
  const user = await findUserByEmail(email);
  if (user) {
    if (await compareHash(password, user.password)) {
      return { id: user._id.toString(), name: user.name, email: user.email };
    } else {
      return { errMessage: "email and password did not match.", errCode: 403 };
    }
  } else {
    return { errMessage: "User Not found.", errCode: 401 };
  }
};

export { loginWithEmailAndPassword };
