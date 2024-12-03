import { pool } from "../libs/db.js";

import { errorHandler } from "../helpers/errorHandler.js";

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

  