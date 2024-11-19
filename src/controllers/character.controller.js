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

  export const getByCharacter = async (req, res) => {
    const { id_character } = req.params;
  
    try {
      const query = `
        SELECT * FROM zenleszz.personajes WHERE id = $1
      `;
      const values = [id_character];
  
      const data = await pool.query(query, values);
  
      if (data.rows.length === 0) {
        return res.status(404).json({ message: 'Personaje no encontrado' });
      }
  
      const info = data.rows;
      res.json({ data: info });
  
    } catch (error) {
      errorHandler(res, 500, "Error al obtener la información de los zenleszz.personajes", error);
    }
  };
  
