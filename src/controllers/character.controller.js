import { pool } from "../libs/db.js";

import { errorHandler } from "../helpers/errorHandler.js";

export const getAll = (req, res) => {
    pool.query('select * from personajes')
    .then((data) => {
      const info = data[0]
      res.json({
        data: info
      })
    })
    .catch(error => {
      errorHandler(res, 404, "Error al obtener la informacion de los personajes", error)
    })
  }

export const getByCharacter = (req, res) => {
  const { id_character } = req.params;

  pool.query(`
    SELECT * FROM personajes WHERE id = ?
  `, [id_character])
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ message: 'Personaje no encontrado' });
      }

      const info = data[0];
      res.json({
        data: info
      });
    })
    .catch((error) => {
      errorHandler(res, 500, "Error al obtener la información de los personajes", error);
    });
};
  