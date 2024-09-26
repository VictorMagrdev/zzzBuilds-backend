import { pool } from "../libs/db.js";

import { errorHandler } from "../helpers/errorHandler.js";

export const getAll = (req, res) => {
  const query = 'SELECT nombre, imagen FROM personajes';

    conexion.query(query, (error, results) => {

        const personajes = results.map(personaje => {
            const imagenPath = personaje.imagen;

            if (fs.existsSync(imagenPath)) {
                const imagenData = fs.readFileSync(imagenPath);
                const extension = path.extname(imagenPath).slice(1);

                return {
                    nombre: personaje.nombre,
                    imagen: `data:image/${extension};base64,${imagenData.toString('base64')}`
                };
            } else {
                return {
                    nombre: personaje.nombre,
                    imagen: null
                };
            }
        });

        res.json(personajes);
    });
}
