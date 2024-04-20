import { loginWithEmailAndPassword } from "../auth/index.js";

const authenticate = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ errMessage: "This is not a valid request." });
  }
  const data = await loginWithEmailAndPassword(email, password);
  if (data.errMessage) {
    res.status(data.errCode).send(({ errMessage } = data));
  }
  res.locals.userId = data.id;
  next();
};

export { authenticate };