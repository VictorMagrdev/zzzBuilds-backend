import cors from "cors";
import express from "express";
import path from "path"; 
import { fileURLToPath } from "url";

import { validateConnection } from "./libs/db.js";
import { routerApi } from "./routes/index.router.js";

const app = express();
const port = 302;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/imagenes/personajes', express.static(path.join(__dirname, 'webscrapping/img_personajes')));
app.use('/imagenes/usuarios', express.static(path.join(__dirname, 'webscrapping/img_usuarios')));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Método: ${req.method}, URL: ${req.url}`);
  next();
});

const whiteList = [];
const options = {
  origin: "*"
}

app.use(cors(options));

validateConnection();
routerApi(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));
