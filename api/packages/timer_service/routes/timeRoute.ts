import express from "express";
import timerController from "../controller/timerController";
import JwtMiddleware from "../middlewares/jwtMiddleware";

const router = express.Router();

/**
 * @swagger
 * /timers:
 *   post:
 *     summary: Ajouter un nouveau timer
 *     tags: [Timers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               time:
 *                 type: number
 *                 example: 1500
 *     responses:
 *       201:
 *         description: Timer créé avec succès
 *       500:
 *         description: Erreur serveur
 */
router
  .route("/timers")
  .post(JwtMiddleware.verifyToken, timerController.addTimer);

/**
 * @swagger
 * /timers/{userId}:
 *   get:
 *     summary: Récupère les timers d'un utilisateur par son ID
 *     tags: [Timers]
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
 *         description: Timers récupérés avec succès
 *       500:
 *         description: Erreur serveur
 */
router
  .route("/timers/:userId")
  .get(JwtMiddleware.verifyToken, timerController.getTimersByUserId);

/**
 * @swagger
 * /timers:
 *   get:
 *     summary: Récupère tous les timers
 *     tags: [Timers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: filter
 *         schema:
 *           type: string
 *           example: "today"
 *         required: false
 *     responses:
 *       200:
 *         description: Liste de tous les timers récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router
  .route("/timers")
  .get(JwtMiddleware.verifyToken, timerController.getAllTimers);

/**
 * @swagger
 * /timers/user:
 *   get:
 *     summary: Récupère les timers de l'utilisateur connecté
 *     tags: [Timers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Timers récupérés avec succès
 *       500:
 *         description: Erreur serveur
 */
router
  .route("/timers/user")
  .get(JwtMiddleware.verifyToken, timerController.getLoginUserTimers);

/**
 * @swagger
 * /timers/delete/{timerId}:
 *   delete:
 *     summary: Supprime un timer par son ID
 *     tags: [Timers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: timerId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Timer supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router
  .route("/timers/delete/:timerId")
  .delete(JwtMiddleware.verifyToken, timerController.deleteUserTimers);

export default router;
