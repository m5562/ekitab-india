import { loginWithEmailAndPassword } from "../auth/index.js";

const authenticate = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ errMessage: "This is not a valid request." });
  }
  loginWithEmailAndPassword(email, password).then((result) => {
    if (result.errMessage) {
      res.status(result.errCode).send({ errMessage: result.errMessage });
    } else {
      console.log(result);
      res.locals.user = result;
      next();
    }
  });
};

export { authenticate };
