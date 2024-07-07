import { createApp } from "./app/app";
import { ProjectBackend } from "./projects/backend";
import sequelize from "../config/database";

async function main() {
  const projectBackend = new ProjectBackend();

  const app = createApp(projectBackend);
  const PORT = 3000;

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  app.listen(PORT, "localhost", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

main();
