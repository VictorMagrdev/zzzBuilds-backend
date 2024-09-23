import { pool } from "../libs/db.js";

import { errorHandler } from "../helpers/errorHandler.js";

export const getUserById = (req, res) => {
  const { id_user } = req.params
  pool.query(`
    select *
    from users
    where id_user = ${id_user}
  `)
  .then((data) => {
    const info = data[0]
    res.json({
      data: info
    })
  })
  .catch(error => {
    errorHandler(res, 404, "Error al obtener la informacion de los productos", error)
  })
}
