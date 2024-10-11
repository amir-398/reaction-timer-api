import connectDB from "./config/connectDB";
import { setupSwagger } from "./config/swaggerConfig";
const express = require("express");
const app = express();
import timeRoute from "./routes/timeRoute";
import authRoute from "./routes/authRoute";
app.use(express.urlencoded());
app.use(express.json());
connectDB();
setupSwagger(app);
app.use("/", timeRoute);
app.use("/", authRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
