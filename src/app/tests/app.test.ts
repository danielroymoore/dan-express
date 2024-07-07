import request from "supertest";
import { Server } from "http";
import { createApp } from "../app";
import { MockProjectBackend } from "../../projects/mock-backend";
import { v4 as uuidv4 } from "uuid";

describe("/projects endpoint", () => {
  let server: Server;

  beforeAll(async () => {
    server = await new Promise((resolve, reject) => {
      const projectBackend = new MockProjectBackend();
      const server = createApp(projectBackend).listen(0, () => {
        const addr = server.address();
        if (addr && typeof addr === "object") {
          resolve(server);
        } else {
          reject(new Error("Unexpected address ${addr} for server"));
        }
      });
    });
  });

  afterAll(async () => {
    await new Promise((resolve) => server.close(resolve));
  });

  it("responds with a 401 if no token is provided", async () => {
    const response = await request(server).get("/projects");
    expect(response.status).toBe(401);
    expect(response.body).toBeDefined();
    console.log(response.body);
  });

  it("responds with a 403 if token is invalid", async () => {
    const response = await request(server)
      .get("/projects")
      .set("Authorization", `token invalid`);
    expect(response.status).toBe(403);
    expect(response.body).toBeDefined();
    console.log(response.body);
  });

  it("responds with a 200 if a token is provided", async () => {
    const response = await request(server)
      .get("/projects")
      .set("Authorization", `token ${uuidv4()}`);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    console.log(response.body);
  });
});
