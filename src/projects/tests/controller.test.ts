import { Request, Response, NextFunction } from "express";
import { ProjectController } from "../controller";
import { MockProjectBackend } from "../mock-backend";

describe("ProjectController", () => {
  let projectController: ProjectController;
  let mockProjectBackend: MockProjectBackend;

  beforeEach(() => {
    mockProjectBackend = new MockProjectBackend();
    projectController = new ProjectController(mockProjectBackend as any);
  });

  describe("getAllProjects", () => {
    it("should return paginated projects", async () => {
      // Arrange
      const req = {
        query: {
          page: "1",
          size: "10",
        },
      } as unknown as Request;

      const res = {
        json: jest.fn(),
      } as unknown as Response;

      const next = jest.fn() as NextFunction;

      // Act
      await projectController.getProjects(req, res, next);

      const projects = await mockProjectBackend.getProjects();

      // Assert
      expect(res.json).toHaveBeenCalledWith({
        currentPage: 1,
        totalPages: 1,
        projects: projects.projects,
      });
      expect(next).not.toHaveBeenCalled();
    });

    it("should handle errors", async () => {
      const req = {
        query: {},
      } as unknown as Request;

      const res = {
        json: jest.fn(),
      } as unknown as Response;

      const next = jest.fn() as NextFunction;

      const error = new Error("Something went wrong");
      jest
        .spyOn(mockProjectBackend, "getProjects")
        .mockRejectedValueOnce(error);

      await projectController.getProjects(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
      expect(res.json).not.toHaveBeenCalled();
    });
  });
});
