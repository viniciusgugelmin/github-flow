import express from "express";
import cors from "cors";
import "express-async-errors";
import { routes } from "./routes/index.js";

class Server {
  app = express();
  port = +process.env.PORT || 5000;
  domain = process.env.DOMAIN || `http://localhost:${this.port}`;

  constructor() {
    this.useConfig();
    this.useRoutes();
  }

  useConfig() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  useRoutes() {
    this.app.use("/", routes);
  }

  init() {
    this.app.listen(this.port, async () => {
      console.log(`Server is running on: ${this.domain}`);
    });
  }
}

export { Server };
