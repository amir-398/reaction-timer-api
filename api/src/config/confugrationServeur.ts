import express, { Application } from "express";
import timeRoute from "../routes/timeRoute";
import authRoute from "../routes/authRoute";
const configureService = (app: Application) => {
  app.use(express.urlencoded());
  app.use(express.json());
  app.use("/", timeRoute);
  app.use("/", authRoute);
};

export default configureService;
