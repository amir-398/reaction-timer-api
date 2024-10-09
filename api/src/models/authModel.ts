import mongoose, { Schema, Document } from "mongoose";
import { NextFunction } from "express";
import bcryptjs from "bcryptjs";
interface AuthProps extends Document {
  email: string;
  password: string;
  role?: boolean; // Référence à une liste d'images
}

const authSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Boolean, default: true },
});
// Hook pour hacher le mot de passe avant de sauvegarder l'utilisateur
authSchema.pre("save", async function (this: any, next: NextFunction) {
  // Si le mot de passe n'a pas été modifié, passe à la suite
  if (!this.isModified("password")) return next();

  // Hacher le mot de passe
  try {
    const salt = await bcryptjs.genSalt(10); // Générer un sel
    this.password = await bcryptjs.hash(this.password, salt); // Hacher le mot de passe avec le sel
    next();
  } catch (error) {
    next(error);
  }
});
const Auth = mongoose.model<AuthProps>("auth", authSchema);
export default Auth;
