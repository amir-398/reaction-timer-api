import { Request, Response } from "express";
import AuthService from "../services/authService";
import * as Yup from "yup";
import registerValidator from "../validators/authValidators";
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
    const result = await authService.login(req.body);
    res.status(200).json({ message: result.message, token: result.token });
  } catch (err) {
    res.status(500).json({ message: "une erreur s'est produite", error: err });
  }
};

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await authService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;
    const user = await authService.getUserById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;
    const result = await authService.updateUser(userId, req.body);
    res.status(200).json({ message: result.message });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;
    const result = await authService.deleteUser(userId);
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
