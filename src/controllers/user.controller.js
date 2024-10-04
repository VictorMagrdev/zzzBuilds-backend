import { pool } from "../libs/db.js";

import { errorHandler } from "../helpers/errorHandler.js";

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
  console.log({ name, user, email, password, confirmPassword });
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Las contraseñas no coinciden' });
  }

  pool.query(`
    SELECT * FROM usuarios WHERE user = ? OR email = ?
  `, [email, user])
  .then(async (existingUser) => {
    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'El correo o el nombre de usuario ya están registrados' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    pool.query(`
      INSERT INTO usuarios (fullname, user, email, password, state_id)
      VALUES (?, ?, ?, ?, ?)
    `, [name, email, username, hashedPassword, 1])
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
  .then(async (data) => {
    const user = data[0];

    if (!user) {
      return res.status(400).json({ error: 'Correo incorrecto' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ userId: user.id_user }, 'secretKey', { expiresIn: '1h' });

    res.json({
      token,
      user: { id: user.id_user, fullname: user.fullname, user: user.user, email: user.email }
    });
  })
  .catch(error => {
    errorHandler(res, 500, "Error al iniciar sesión", error);
  });
};


export const getUserProfile = (req, res) => {
  const { userId } = req.user;

  pool.query(`
    SELECT id_user, fullname, user, email, state_id
    FROM usuarios
    WHERE id_user = ?
  `, [userId])
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


export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado' });
  }

  try {
    const verified = jwt.verify(token, 'secretKey');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Token no válido' });
  }
};
