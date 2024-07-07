// testDatabaseConnection.ts

import sequelize from "./config/database"; // Adjust the path as per your project structure

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    await sequelize.close(); // Close the Sequelize connection
  }
}

testDatabaseConnection();
