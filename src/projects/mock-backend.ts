import { Project, PaginatedProjects } from "./models";

const projects = [
  Project.build({
    id: "a6b26760-768c-43e1-96e8-296cfeeab995",
    url: "localhost/VCS/1",
    status: "Under validation",
    country: "China",
  }),
  Project.build({
    id: "0c8f9591-f3e7-4b45-8eca-97b431e280c8",
    url: "localhost/VCS/2",
    status: "Under validation",
    country: "China",
  }),
  Project.build({
    id: "c90f7eea-4004-4bdb-8d23-34ef58a2934d",
    url: "localhost/VCS/3",
    status: "Under validation",
    country: "China",
  }),
];

export class MockProjectBackend {
  public async getProjects(): Promise<PaginatedProjects> {
    return { projects: projects, totalCount: projects.length };
  }
}
