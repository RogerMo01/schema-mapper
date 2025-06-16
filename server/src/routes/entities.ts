import express, { NextFunction, Request, Response } from "express";
const router = express.Router();
import da from "../dataAccess/da";

// Receive file, save it, and respond with token
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ entities: ['Candidato', 'EntidadError'] });
});

export default router;
