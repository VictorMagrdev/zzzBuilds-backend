import { pool } from "../libs/db.js";
import { errorHandler } from "../helpers/errorHandler.js";
import jwt from 'jsonwebtoken';

// Obtener usuario por ID
export const getUserById = async (req, res) => {
  const { id_user } = req.params;

  try {
    const query = `
      SELECT id_user, fullname, username, email, state_id
      FROM zenleszz.usuarios
      WHERE id_user = $1
    `;

    const values = [id_user];

    const data = await pool.query(query, values);
    const user = data.rows[0];

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(user);

  } catch (error) {
    errorHandler(res, 500, "Error al obtener la información del usuario", error);
  }
};


// Registrar usuario
export const registerUser = async (req, res) => {
  const { name, username, email, password, confirmPassword } = req.body;
  console.log({ name, username, email, password, confirmPassword })

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Las contraseñas no coinciden' });
  }
  try {
    const checkUserQuery = 'SELECT * FROM zenleszz.usuarios WHERE username = $1 OR email = $2';
    const checkUserValues = [username, email];
    const existingUser = await pool.query(checkUserQuery, checkUserValues);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'El correo o el nombre de usuario ya están registrados' });
    }

    const insertQuery = {
      text: `INSERT INTO zenleszz.usuarios (fullname, username, email, password, state_id) VALUES ($1, $2, $3, $4, $5)`,
      values: [name, username, email, password, 1],
    }

    const insertResult = await pool.query(insertQuery);
    res.status(201).json({ message: 'Usuario registrado exitosamente' });

  } catch (error) {
    errorHandler(res, 500, "Error al registrar el usuario", error);
  }
};


// Iniciar sesión
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = 'SELECT * FROM zenleszz.usuarios WHERE email = $1';
    const values = [email];

    const data = await pool.query(query, values);
    const user = data.rows[0];

    if (!user) {
      return res.status(400).json({ error: 'Correo incorrecto' });
    }

    if (password !== user.password) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ userId: user.id_user }, 'secretKey', { expiresIn: '1h' });

    res.json({
      token,
      user: { id: user.id_user, fullname: user.fullname, username: user.username, email: user.email }
    });
  } catch (error) {
    errorHandler(res, 500, "Error al iniciar sesión", error);
  }
};

// Obtener perfil del usuario
export const getUserProfile = async (req, res) => {
  const userId = req.userId;
  const newuserId = parseInt(userId)
  try {
    const insertQuery = {
      text: 'SELECT username FROM zenleszz.usuarios WHERE id_user = $1',
      values: [newuserId],
    }
    const data = await pool.query(insertQuery);
    const user = data.rows[0];

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(user);

  } catch (error) {
    errorHandler(res, 500, "Error al obtener los datos del usuario", error);
  }
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
