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