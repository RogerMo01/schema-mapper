import express, { NextFunction, Request, Response } from "express";
const router = express.Router();
import da from "../dataAccess/contract";

// middleware that is specific to this router
// const middlewareUseLog = (req: Request, res: Response, next: NextFunction) => {
//   console.log("Route middleware is used");
//   next();
// };
// router.use(middlewareUseLog);

// Receive file save it, and respond with token
router.post(
  "/",
  da.saveFileMiddleware("file"),
  (req: Request, res: Response) => {
    console.log(`*️⃣  Received POST request`);
    console.log(`|📄 File: ${req.file?.filename}`);
    console.log(`|🏷️  Entity: ${req.body.Entity}`);
    console.log(`|👤 Token assigned: ${req.token}`);
    console.log(`*️⃣  =======================`);
    res.status(200).json({ token: req.token });
  }
);

export default router;
