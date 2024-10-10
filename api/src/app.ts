import configureService from "./config/confugrationServeur";
import connectDB from "./config/connectDB";
import startServeur from "./config/serveur";
import express from "express";
import { setupSwagger } from "./config/swaggerConfig";
const app = express();

connectDB();
configureService(app);
startServeur(app);
setupSwagger(app);

export default app;
