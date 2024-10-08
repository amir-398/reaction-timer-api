import connectDB from "./config/connectDB";

const express = require("express");
const app = express();
const port = 3000;
import timeRoute from "./routes/timeRoute";
import authRoute from "./routes/authRoute";

connectDB();

app.use("/time", timeRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
