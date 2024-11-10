import { pool } from "../libs/db.js";
import { errorHandler } from "../helpers/errorHandler.js";
import jwt from 'jsonwebtoken';

// Obtener usuario por ID
export const getUserById = (req, res) => {
  const { id_user } = req.params;

  pool.query(`
    SELECT id_user, fullname, username, email, state_id
    FROM zenleszz.usuarios
    WHERE id_user = ?
  `, [id_user])
    .then((data) => {
      const user = data.rows;
      if (!user || user.length === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json(user);
    })
    .catch(error => {
      errorHandler(res, 500, "Error al obtener la información del usuario", error);
    });
};

// Registrar usuario
export const registerUser = async (req, res) => {
  const { name, username, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Las contraseñas no coinciden' });
  }

  pool.query(`
    SELECT * FROM zenleszz.usuarios WHERE username = ${username} OR email = ${email}
  `)
    .then(([existingUser]) => {
      if (existingUser.length > 0) {
        return res.status(400).json({ error: 'El correo o el nombre de usuario ya están registrados' });
      }

      pool.query(`
        INSERT INTO zenleszz.usuarios (fullname, username, email, password, state_id)
        VALUES (?, ?, ?, ?, ?)
      `, [name, username, email, password, 1])
        .then(() => {
          res.status(201).json({ message: 'Usuario registrado exitosamente' });
        })
        .catch(error => {
          errorHandler(res, 500, "Error al registrar el usuario", error);
        });
    })
    .catch(error => {
      errorHandler(res, 500, "Error al verificar el email o nombre de usuario", error);
    });
};

// Iniciar sesión
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  pool.query(`
    SELECT * FROM zenleszz.usuarios WHERE email = ?
  `, [email])
    .then((data) => {
      const user = data.rows;

      if (!user[0]?.email) {
        return res.status(400).json({ error: 'Correo incorrecto' });
      }

      if (password !== user[0].password) {
        return res.status(400).json({ error: 'Contraseña incorrecta' });
      }

      const token = jwt.sign({ userId: user[0].id_user }, 'secretKey', { expiresIn: '1h' });

      res.json({
        token,
        user: { id: user[0].id_user, fullname: user[0].fullname, username: user[0].username, email: user[0].email }
      });
    })
    .catch(error => {
      errorHandler(res, 500, "Error al iniciar sesión", error);
    });
};

// Obtener perfil del usuario
export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  pool.query(`
    SELECT username, img_profile
    FROM zenleszz.usuarios
    WHERE id_user = ?
  `, [userId])
    .then((data) => {
      const user = data.rows;

      if (!user || user.length === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json(user[0]);
    })
    .catch(error => {
      errorHandler(res, 500, "Error al obtener los datos del usuario", error);
    });
};

// Verificar token
export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No se proporcionó un token' });
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido' });
    }
    req.userId = decoded.userId;
    next();
  });
};
