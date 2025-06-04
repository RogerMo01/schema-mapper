import multer from "multer";
import { Request } from "express";
import crypto from "crypto";

// This class is for data manipulation
class DataAccess {
  // Multer object for saving file
  private uploadMulter = multer({
    storage: multer.diskStorage({
      destination: function (req: Request, file, cb) {
        cb(null, "./src/data");
      },
      filename: function (req: Request, file, cb) {
        const uniqueId = crypto.randomUUID();
        req.token = uniqueId;
        cb(null, uniqueId + ".csv");
      },
    }),
  });

  saveFileMiddleware = (fieldName: string) => {
    return this.uploadMulter.single(fieldName);
  };
}

export default new DataAccess();
