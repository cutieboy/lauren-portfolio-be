import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  return res.send("LOGGED IN!");
});

export default router;
