import express from "express";
import { ProjectController } from "src/projects/controller";

export default (projectController: ProjectController) => {
  const router = express.Router();

  // Define routes
  router.get("/projects", projectController.getProjects);

  return router;
};
