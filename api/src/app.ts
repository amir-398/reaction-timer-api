import configureService from "./config/confugrationServeur";
import connectDB from "./config/connectDB";
import startServeur from "./config/serveur";
import express from "express";
const app = express();

connectDB();
configureService(app);
startServeur(app);

export default app;
