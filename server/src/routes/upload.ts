import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

// middleware that is specific to this router
const middlewareUseLog = (req: Request, res: Response, next: NextFunction) => {
  console.log("Route middleware is used");
  next();
};
router.use(middlewareUseLog);

// Controller
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Called using Router" });
});

export default router;
