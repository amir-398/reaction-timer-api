import express from "express";
import authController from "../controller/authController";
import JwtMiddleware from "../middlewares/jwtMiddleware";

const router = express.Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Enregistre un nouvel utilisateur
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "test@hotmail.fr"
 *               password:
 *                 type: string
 *                 example: "Test12@/"
 *               role:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.route("/register").post(authController.register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Connecte un utilisateur
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "test@hotmail.fr"
 *               password:
 *                 type: string
 *                 example: "Test12@/"
 *     responses:
 *       200:
 *         description: Connexion réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Connexion réussie"
 *                 token:
 *                   type: string
 *                   example: "JWT-TOKEN"
 *       500:
 *         description: Erreur serveur
 */
router.route("/login").post(authController.login);

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     summary: Récupère un utilisateur par son ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Utilisateur récupéré avec succès
 *       500:
 *         description: Erreur serveur
 */
router
  .route("/users/:userId")
  .get(JwtMiddleware.verifyToken, authController.getUserById);

/**
 * @swagger
 * /users/update:
 *   put:
 *     summary: Met à jour un utilisateur connecté
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "test@hotmail.fr"
 *               password:
 *                 type: string
 *                 example: "NewPassword123@/"
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès
 *       500:
 *         description: Erreur serveur
 */
router
  .route("/users/update")
  .put(JwtMiddleware.verifyToken, authController.updateUser);

/**
 * @swagger
 * /users/delete/{userId}:
 *   delete:
 *     summary: Supprime un utilisateur par son ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router
  .route("/users/delete/:userId")
  .delete(JwtMiddleware.verifyToken, authController.deleteUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Récupère tous les utilisateurs
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des utilisateurs récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router
  .route("/users")
  .get(JwtMiddleware.verifyToken, authController.getAllUsers);

export default router;
