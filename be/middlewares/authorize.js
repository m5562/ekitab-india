import jwt from "jsonwebtoken";

const authorize = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
//   console.log(token);
  if (token) {
    const userId = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    res.locals.userId = userId
  } else {
    res.status(498).send("Invalid token");
  }
  next();
};

export { authorize };
