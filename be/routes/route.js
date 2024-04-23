import { Router } from "express";
import jwt from "jsonwebtoken";
import {
  createUserByEmailAndPassword,
  findAllUser,
  saveAdmin,
  findAdmins,
  createQuestion,
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
  if (res.locals.user) {
    const token = jwt.sign(res.locals.user.id, process.env.ACCESS_TOKEN_SECRET);
    res.status(201).send({
      message: "logged in successfully",
      user: {
        email: res.locals.user.email,
        name: res.locals.user.name,
        access_token: token,
      },
    });
  }
});

router.get("/admin/allusers", AdminAuthourization, (req, res) => {
  // const token = jwt.sign(req.userId, process.env.ACCESS_TOKEN_SECRET);
  findAllUser().then((userData) => {
    res.status(200).send(userData);
  });
});

router.post("/admin/addQuestion", (req, res) => {
  const data = req.body.questions;
  createQuestion(data).then((responce) => {
    // console.log(responce);
    res.send(responce);
  });
});

router.post("/thomas", (req, res) => {
  const prompt = req.body.prompt;
  magix(prompt)
    .then((responce) => {
      res.status(200).send(responce);
    })
    .catch(console.log);
});
export { router };
