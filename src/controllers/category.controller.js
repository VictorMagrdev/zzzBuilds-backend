import { pool } from "../libs/db.js";

import { errorHandler } from "../helpers/errorHandler.js";

export const getAll = (req, res) => {
  pool.query('select * from zenleszz.categories')
  .then((data) => {
    const info = data.rows
    res.json({
      data: info
    })
  })
  .catch(error => {
    errorHandler(res, 404, "Error al obtener la informacion de las categorias", error)
  })
}
