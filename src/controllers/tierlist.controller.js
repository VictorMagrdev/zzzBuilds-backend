import { pool } from "../libs/db.js";
import multer from 'multer';
import { errorHandler } from "../helpers/errorHandler.js";
import path from 'path';
import fs from 'fs';
export const getAll = (req, res) => {
    pool.query('select * from zenleszz.tierlist')
    .then((data) => {
      const info = data.rows
      res.json({
        data: info
      })
    })
    .catch(error => {
      errorHandler(res, 404, "Error al obtener la informacion de los zenleszz.tierlist", error)
    })
  }


export const getById = async (req, res) => {
    const { id_tierlist } = req.params;

    try {
      const query = `
        SELECT * FROM zenleszz.tierlist WHERE id = $1
      `;
      const values = [id_tierlist];

      const data = await pool.query(query, values);

      if (data.rows.length === 0) {
        return res.status(404).json({ message: 'Tier list no encontrada' });
      }

      const info = data.rows;
      res.json({ data: info });

    } catch (error) {
      errorHandler(res, 500, "Error al obtener la información de los zenleszz.tierlist", error);
    }
  };

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = 'src/webscrapping/img_tierlist';
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      const extname = path.extname(file.originalname);
      const name = req.body.name || 'default-name';
      const imageName = `${name}-${Date.now()}${extname}`;
      cb(null, imageName);
    },
  });

  const upload = multer({ storage });

  export const create = (req, res) => {
    upload.single('image')(req, res, (err) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: "Error al subir la imagen", error: err });
      }
      const { name, usuario } = req.body;

      const imagen = req.file.filename;
      const userId = req.userId;
      const user_id = parseInt(userId)
      console.log({name, imagen, user_id})
      pool.query(
        `INSERT INTO zenleszz.tierlist (nombre, imagen, user_id)
         VALUES ($1, $2, $3) RETURNING id created_at`,
        [name, imagen, user_id],
        (err, data) => {
          if (err) {
            console.log(err)
            errorHandler(res, 500, "Error al crear el tier list", err);
            return;
          }

          res.status(201).json({
            message: "Tier list creada con éxito",
            data: data.rows[0],
          });
        }
      );
    });
  };
