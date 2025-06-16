import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import uploadRoute from "./routes/upload";
import entitiesRoute from "./routes/entities";

// Setup server
const app = express();
app.use(cors());
app.disable("x-powered-by");

// Setup routes
app.use("/upload", uploadRoute);
app.use("/entities", entitiesRoute);

// Start server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});