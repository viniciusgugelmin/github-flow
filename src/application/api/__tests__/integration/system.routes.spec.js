import supertest from "supertest";
import { Server } from "../../Server.js";
import dotenv from "dotenv";

dotenv.config();

const server = new Server();
const app = server.app;

describe("system.routes", () => {
  const request = async () => supertest(app).get("/");

  describe("success", () => {
    it("should return OK", async () => {
      const response = await request();
      expect(response.status).toBe(200);
      expect(response.text).toEqual("OK");
    });
  });
});
