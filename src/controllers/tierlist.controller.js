import { pool } from "../libs/db.js";
import multer from 'multer';
import { errorHandler } from "../helpers/errorHandler.js";
import path from 'path';

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
      cb(null, 'webscrapping/img_tierlist/');
    },
    filename: (req, file, cb) => {
      const extname = path.extname(file.originalname);
      const imageName = `${req.body.name}-${Date.now()}${extname}`;
      cb(null, imageName);
    },
  });

  const upload = multer({ storage });

  export const create = (req, res) => {
    upload.single('image')(req, res, (err) => {
      if (err) {
        return res.status(500).json({ message: "Error al subir la imagen", error: err });
      }

      const { name, usuario } = req.body;

      const imageId = req.file.filename;

      pool.query(
        `INSERT INTO zenleszz.tierlist (name, usuario, imageId)
         VALUES ($1, $2, $3) RETURNING id, name, usuario, imageId, created_at`,
        [name, usuario, imageId],
        (err, data) => {
          if (err) {
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
