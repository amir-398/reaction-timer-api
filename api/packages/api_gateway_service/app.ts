import express from "express";
const app = express();

const port = 3003;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req: any, res: any) => {
  res.send("Hello!");
});
export default app;
