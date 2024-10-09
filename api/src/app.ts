import connectDB from "./config/connectDB";

const express = require("express");
const app = express();
import timeRoute from "./routes/timeRoute";
import authRoute from "./routes/authRoute";
app.use(express.urlencoded());
app.use(express.json());
connectDB();

app.use("/", timeRoute);
app.use("/", authRoute);

if (process.env.NODE_ENV == "test") {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

export default app;
