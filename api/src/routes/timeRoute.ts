import express from "express";

const route = express.Router();

route.get("/time", (req, res) => {
  res.send(new Date().toString());
});

export default route;
