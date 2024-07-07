import express from "express";
import { ProjectController } from "../projects/controller";
import { ProjectBackend } from "../projects/backend";
import authMiddleware from "../middleware/auth";
import projectRoutes from "./routes/projects";

class BackendContainer {
  public readonly projectBackend: ProjectBackend;

  constructor(projectBackend: ProjectBackend) {
    this.projectBackend = projectBackend;
  }
}

export function createApp(projectBackend: ProjectBackend): express.Express {
  const app = express();

  app.use(express.json());
  app.use(authMiddleware);

  const backendContainer = new BackendContainer(projectBackend);
  const projectController = new ProjectController(
    backendContainer.projectBackend
  );

  //Routes:
  app.use("/", projectRoutes(projectController));

  return app;
}
