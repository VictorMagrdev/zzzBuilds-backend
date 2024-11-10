import { pool } from "../libs/db.js";

import { errorHandler } from "../helpers/errorHandler.js";

export const getAll = (req, res) => {
    pool.query('select * from zenleszz.personajes')
    .then((data) => {
      const info = data.rows
      res.json({
        data: info
      })
    })
    .catch(error => {
      errorHandler(res, 404, "Error al obtener la informacion de los zenleszz.personajes", error)
    })
  }

export const getByCharacter = (req, res) => {
  const { id_character } = req.params;
  console.log("hola")
  pool.query(`
    SELECT * FROM zenleszz.personajes WHERE id = ${id_character}
  `)
    .then((data) => {
      console.log(data)
      if (data.length === 0) {
        return res.status(404).json({ message: 'Personaje no encontrado' });
      }
      console.log(data)
      const info = data.rows;
      console.log(info)
      res.json({
        data: info
      });
    })
    .catch((error) => {
      errorHandler(res, 500, "Error al obtener la información de los zenleszz.personajes", error);
    });
};
