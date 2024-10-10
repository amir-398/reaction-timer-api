import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "f1 reaction timer API",
      version: "1.0.0",
      description: "Une API pour gérer les timers de réaction des utilisateurs",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.ts"], // Indique où Swagger doit chercher les routes pour générer la documentation
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export const setupSwagger = (app: Application) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
