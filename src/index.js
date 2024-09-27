import cors from "cors";
import express from "express";
import path from "path"; 
import { fileURLToPath } from "url";

import { validateConnection } from "./libs/db.js";
import { routerApi } from "./routes/index.router.js";

const app = express();
const port = 300;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/imagenes', express.static(path.join(__dirname, 'webscrapping/imagenes')));

app.use(express.json());

const whiteList = [];
const options = {
  origin: "*"
}

app.use(cors(options));

validateConnection();
routerApi(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));
