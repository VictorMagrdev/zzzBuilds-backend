import * as dotenv from 'dotenv';
import pg from 'pg';
const { Pool } = pg;

dotenv.config();

const username = 'postgres';
const database = 'zzzbuilds';
const password = '';
const host = 'localhost';
const db_port = 5432;
const schema = 'zenleszz';

const USER = encodeURIComponent(username);
const PASSWORD = encodeURIComponent(password);

export const pool = new Pool({
    host: host,
    user: USER,
    password: PASSWORD,
    database: database,
    port: db_port,
    searchPath: [schema],
});

export const validateConnection = async () => {
  try {
    await pool.query('select * from zenleszz.personajes');
    console.log('¡Conexión exitosa a PostgreSQL!');
} catch (error) {
    console.error('Error de conexión:', error);
}
};
