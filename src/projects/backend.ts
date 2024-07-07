import { Project, PaginatedProjects } from "./models";

export class ProjectBackend {
  public async getProjects(
    page: number,
    size: number
  ): Promise<PaginatedProjects> {
    try {
      const result = await Project.findAndCountAll({
        limit: size,
        offset: (page - 1) * size,
      });

      const projects: Project[] = result.rows;
      const totalCount: number = result.count;

      return { projects, totalCount };
    } catch (error) {
      throw new Error("Error fetching projects");
    }
  }
}
