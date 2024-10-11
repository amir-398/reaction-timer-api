import express from "express";
import connectDB from "./config/connectDB";
import { setupSwagger } from "./config/swaggerConfig";
import authRoute from "./routes/authRoute";
const app = express();

app.use(express.urlencoded());
app.use(express.json());
connectDB();
setupSwagger(app);
app.use("/", authRoute);
app.get("/", (req, res) => {
  res.send("Helosr!");
});

const port = process.env.USER_SERVICE_PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
