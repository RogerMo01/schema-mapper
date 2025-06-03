import express, { Request, Response } from 'express';
import 'dotenv/config'
const cors = require('cors');

// Setup server
const app = express();
app.use(cors());
app.disable("x-powered-by")


app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: "Hello World!"});
});


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});