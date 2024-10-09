import { Request, Response } from "express";
import AuthService from "../services/authService";
import { authValidator, registerValidator } from "../validators/authValidators";
const authService = new AuthService();

const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await registerValidator.validateAsync(req.body);
    const result = await authService.register(data);
    res.status(201).json({ message: result.message });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await authValidator.validateAsync(req.body);
    const result = await authService.login(data);
    res.status(200).json({ message: result.message, token: result.token });
  } catch (err) {
    res.status(500).json({ message: "une erreur s'est produite", error: err });
  }
};

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const connectedUserId = req.user?.id;
    const users = await authService.getAllUsers(connectedUserId);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;
    const connectedUserId = req.user?.id;
    const user = await authService.getUserById(userId, connectedUserId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    const user = await authValidator.validateAsync(req.body);
    const result = await authService.updateUser(userId, user);
    res.status(200).json({ message: result.message });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const adminId = req.user?.id;
    const userId = req.params.userId;
    const result = await authService.deleteUser(userId, adminId);
    res.status(200).json({ message: result.message });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
