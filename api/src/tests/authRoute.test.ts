import configureService from "../config/confugrationServeur";
import express, { Application } from "express";
import connectDB from "../config/connectDB";
import supertest from "supertest";

describe("user Routes", () => {
  const app: Application = express();
  beforeAll(async () => {
    configureService(app);
    await connectDB();
  });

  afterAll(async () => {});

  describe("POST /register", () => {
    it("should add a new yser", async () => {
      const response = await supertest(app).post("/register").send({
        email: "test@hotmail.fr",
        password: "Test12@/",
        role: true,
      });
      expect(response.status).toBe(201);
    });
  });
});
