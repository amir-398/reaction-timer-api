import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import Auth from "../models/authModel";

class AuthService {
  async register(data: { email: string; password: string; role: boolean }) {
    const { email } = data;
    const user = await Auth.findOne({ email });
    if (user) {
      return { message: "User already exists" };
    }
    const newUser = new Auth(data);
    await newUser.save();
    return { message: "User created" };
  }

  async login(data: { email: string; password: string }) {
    const email = data.email;
    const password = data.password;

    const user = await Auth.findOne({ email });

    if (!user) {
      return { message: "Utilisateur non trouvé" };
    }
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return { message: "email ou Mot de passe incorrect" };
    }

    const payload = {
      id: user.id,
    };
    // Générer un JWT
    const token = jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: "10h", // Définir une durée de vie appropriée pour le token
    });
    return { message: "Utilisateur connecté", token: token };
  }

  async getAllUsers(connectedUserId: string) {
    const user = await Auth.findById(connectedUserId);
    if (user?.role) {
      return {
        message: "Vous n'êtes pas autorisé à effectuer cette opération",
      };
    }
    return await Auth.find();
  }

  async getUserById(userId: string, connectedUserId: string) {
    const user = await Auth.findById(connectedUserId);
    if (user?.role || connectedUserId !== userId) {
      return {
        message: "Vous n'êtes pas autorisé à effectuer cette opération",
      };
    }
    return await Auth.findById(userId);
  }

  async updateUser(
    userId: string,
    updatedUser: { email: string; password: string }
  ) {
    await Auth.findById(userId).updateOne(updatedUser);
    return { message: "Utilisateur mis à jour" };
  }

  async deleteUser(userId: string, userConnectedId: string) {
    const userConnected = await Auth.findById(userConnectedId);

    if (userConnected?.role === true && userConnected.id !== userId) {
      return {
        message: "Vous n'êtes pas autorisé à effectuer cette opération",
      };
    }

    await Auth.findById(userId).deleteOne();
    return { message: "Utilisateur supprimé" };
  }
}

export default AuthService;
