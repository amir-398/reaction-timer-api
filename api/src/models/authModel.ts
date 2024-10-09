import mongoose, { Schema, Document } from "mongoose";
import { NextFunction } from "express";
interface AuthProps extends Document {
  email: string;
  password: string;
  role: boolean; // Référence à une liste d'images
}

const authSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Boolean, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
// Hook pour hacher le mot de passe avant de sauvegarder l'utilisateur
authSchema.pre("save", async function (this: any, next: NextFunction) {
  // Si le mot de passe n'a pas été modifié, passe à la suite
  if (!this.isModified("password")) return next();

  // Hacher le mot de passe
  try {
    const salt = await bcrypt.genSalt(10); // Générer un sel
    this.password = await bcrypt.hash(this.password, salt); // Hacher le mot de passe avec le sel
    next();
  } catch (error) {
    next(error);
  }
});
const Auth = mongoose.model<AuthProps>("auth", authSchema);
export default Auth;
