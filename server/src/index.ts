import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import uploadRoute from "./routes/upload";

// Setup server
const app = express();
app.use(cors());
app.disable("x-powered-by");

// Setup routes
app.use("/upload", uploadRoute);

// Start server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});