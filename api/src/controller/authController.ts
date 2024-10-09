import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import Auth from "../models/authModel";
import jwt from "jsonwebtoken";

const register = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body);

    const newUser = new Auth(req.body);
    const user = await newUser.save();
    res.status(201).json({ message: `Utilisateur crée ${user}` });
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await Auth.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "email ou Mot de passe incorrect" });
      return;
    }
    // Création du payload pour JWT
    const payload = {
      id: user.id,
    };
    // Générer un JWT
    const token = jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: "10h", // Définir une durée de vie appropriée pour le token
    });

    res.status(200).json({ message: "Utilisateur connecté", token: token });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default { register, login };
