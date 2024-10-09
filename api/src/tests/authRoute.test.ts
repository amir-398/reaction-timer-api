import mongoose from "mongoose";
import request from "supertest";
import app from "../app";

describe("Accessoire Routes", () => {
  let validId: string;
  let server: any;
  beforeAll(async () => {
    server = app.listen(4000);
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect("mongodb://localhost:27017/test");
    }

    // Générer un ObjectId valide pour les tests
    validId = new mongoose.Types.ObjectId().toString();
  });

  afterAll(async () => {
    server.close();
    await mongoose.connection.close();
  });
  it("POST /register - should add a new yser", async () => {
    const response = await request(app)
      .post("/register") // Utiliser un ObjectId valide ici
      .field("email", "test@gmail.com")
      .field("password", "Test123!")
      .field("role", true);
    expect(response.status).toBe(201);
  });
});
