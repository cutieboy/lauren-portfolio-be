import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
  res.send("signed up!");
});

export default router;
