import express from "express";

const route = express.Router();

route.get("/auth", (req, res) => {
  res.send("auth");
});

export default route;
