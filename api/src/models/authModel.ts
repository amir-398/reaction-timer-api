import mongoose, { Schema, Document } from "mongoose";
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

const Auth = mongoose.model<AuthProps>("auth", authSchema);
export default Auth;
