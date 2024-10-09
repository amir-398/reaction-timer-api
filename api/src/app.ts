import connectDB from "./config/connectDB";

const express = require("express");
const app = express();
const port = 3000;
import timeRoute from "./routes/timeRoute";
import authRoute from "./routes/authRoute";
app.use(express.urlencoded());
app.use(express.json());
connectDB();

app.use("/", timeRoute);
app.use("/", authRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
