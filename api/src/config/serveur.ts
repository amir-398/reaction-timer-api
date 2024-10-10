import { Application } from "express";

const startServeur = async (app: Application) => {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

export default startServeur;
