import connectDB from "./config/connectDB";
import express from "express";
import { setupSwagger } from "./config/swaggerConfig";
import timeRoute from "./routes/timeRoute";
import authRoute from "./routes/authRoute";
const app = express();
app.use(express.urlencoded());
app.use(express.json());

connectDB();

app.use("/", timeRoute);
app.use("/", authRoute);
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
setupSwagger(app);

export default app;
