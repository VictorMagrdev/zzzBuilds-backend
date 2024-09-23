import { pool } from "../libs/db.js"

import { errorHandler } from "../helpers/errorHandler.js"

export const getAll = (req, res) => {
  pool.query('select * from items')
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

export const getByCategory = (req, res) => {
  const { id_category } = req.params
  pool.query(`
    select i.*, c.title as title_category, c.description as description_category
    from items i
    join categories c on i.category_id = c.id_category
    where i.category_id = ${id_category} && c.state_id = 1;
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



