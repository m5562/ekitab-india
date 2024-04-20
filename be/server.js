import express from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes/route.js";
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log("Express: ✅"));
