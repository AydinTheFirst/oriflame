import express from "express";

// Routers
import { AuthRouter } from "./auth.router.js";
import { isLoggedIn } from "../helpers/passport.js";
import { userModel } from "../helpers/schemas/user.js";
import { APIError } from "../helpers/utils.js";

const app = express.Router();
export const router = app;

router.use("/auth", AuthRouter);

router.get("/", (req, res) => {
  res.send({ message: "API is working!" });
});

router.get("/form", isLoggedIn, async (req, res) => {
  const models = await userModel.find();
  res.send(models);
});

router.post("/form", isLoggedIn, async (req, res) => {
  const model = new userModel(req.body);
  try {
    await model.save();
    return res.send(model);
  } catch (error) {
    return APIError(res, String(error));
  }
});

router.delete("/:id", isLoggedIn, async (req, res) => {
  // @ts-ignore
  const id = req.params.id;

  try {
    const model = await userModel.findOneAndDelete({ id });
    res.send(model);
  } catch (error) {
    return APIError(res, String(error));
  }
});
