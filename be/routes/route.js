import { Router } from "express";
import jwt from "jsonwebtoken";
import {
  createUserByEmailAndPassword,
  findAllUser,
} from "../mongodb/operations.js";
import { authenticate } from "../middlewares/authenticate.js";
import { authorize } from "../middlewares/authorize.js";
import { AdminAuthourization } from "../middlewares/AdminAuthourization.js";
import { magix } from "./../ai/google.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  const data = await createUserByEmailAndPassword(name, email, password);
  if (data.errMessage) {
    res.status(403).send(data);
  } else {
    const token = jwt.sign(
      data._id.toString(),
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(201).send({
      message: "Account created successfully",
      user: {
        email: data.email,
        name: data.name,
        access_token: token,
      },
    });
  }
});

router.post("/login", authenticate, (req, res) => {
  if (res.locals.userId) {
    const token = jwt.sign(req.userId, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).send(token);
  }
});

router.get("/users/all", AdminAuthourization, (req, res) => {
  // const token = jwt.sign(req.userId, process.env.ACCESS_TOKEN_SECRET);
  findAllUser().then((userData) => {
    res.status(200).send(userData);
  });
});

router.post("/test", authorize, (req, res) => {
  res.send(res.locals.userId);
});

router.get("/magix", (req, res) => {
  const prompt = req.body.prompt;
  magix(prompt).then((responce) => {
    res.status(200).send(responce);
  });
});
export { router };
