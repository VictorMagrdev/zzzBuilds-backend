import { pool } from "../libs/db.js";

import { errorHandler } from "../helpers/errorHandler.js";
import jwt from 'jsonwebtoken';

export const getUserById = (req, res) => {
  const { id_user } = req.params;

  pool.query(`
    SELECT id_user, fullname, user, email, state_id
    FROM usuarios
    WHERE id_user = ?
  `, [id_user])
  .then((data) => {
    const user = data[0];
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(user);
  })
  .catch(error => {
    errorHandler(res, 500, "Error al obtener la información del usuario", error);
  });
};


export const registerUser = async (req, res) => {
  const { name, user, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Las contraseñas no coinciden' });
  }

  pool.query(`
    SELECT * FROM usuarios WHERE user = ? OR email = ?
  `, [user, email])
  .then(([existingUser]) => {

    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'El correo o el nombre de usuario ya están registrados'});
    }   
    
    pool.query(`
      INSERT INTO usuarios (fullname, user, email, password, state_id)
      VALUES (?, ?, ?, ?, ?)
    `, [name, user, email, password, 1])
    .then(() => {      
      res.status(201).json({ message: 'Usuario registrado exitosamente'});
    })
    .catch(error => {
      errorHandler(res, 500, "Error al registrar el usuario", error);
    });
  })
  .catch(error => {
    errorHandler(res, 500, "Error al verificar el email o nombre de usuario", error);
  });
};


export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  pool.query(`
    SELECT * FROM usuarios WHERE email = ?
  `, [email])
  .then((data) => {
    const user = data[0];

    if (!user[0].email) {
      return res.status(400).json({ error: 'Correo incorrecto' });
    }

    if (password !== user[0].password) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ userId: user[0].id_user }, 'secretKey', { expiresIn: '1h' });

    res.json({
      token,
      user: { id: user[0].id_user, fullname: user[0].fullname, user: user[0].user, email: user[0].email }
    });
  })
  .catch(error => {
    errorHandler(res, 500, "Error al iniciar sesión", error);
  });
};


export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  pool.query(`
    SELECT id_user, fullname, user, email, state_id, img_profile
    FROM usuarios
    WHERE id_user = ?
  `, [userId])
  .then((data) => {
    const user = data[0];

    if (!user || user.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(user[0]); 
  })
  .catch(error => {
    errorHandler(res, 500, "Error al obtener los datos del usuario", error);
  });
};

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No se proporcionó un token' });
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {;
      return res.status(401).json({ error: 'Token inválido' });
    }
    req.userId = decoded.userId;
    next();
  });
};

