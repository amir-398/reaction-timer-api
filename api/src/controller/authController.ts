import { Request, Response } from "express";

const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (email === "" && password === "password") {
      res.status(200).json;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};
export default { login };
