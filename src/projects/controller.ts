import { Request, Response, NextFunction } from "express";
import { ProjectBackend } from "./backend";

export class ProjectController {
  private projectBackend: ProjectBackend;

  constructor(projectService: ProjectBackend) {
    this.projectBackend = projectService;
  }

  public getProjects = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const page: number = parseInt(req.query.page as string, 10) || 1;
      const size: number = parseInt(req.query.size as string, 10) || 50;

      const projects = await this.projectBackend.getProjects(page, size);

      const response = {
        currentPage: page,
        totalPages: Math.ceil(projects.totalCount / size),
        projects: projects.projects,
      };

      res.json(response);
    } catch (error) {
      next(error);
    }
  };
}
