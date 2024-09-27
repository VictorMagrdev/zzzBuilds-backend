import * as dotenv from 'dotenv'
import mysql2 from 'mysql2/promise';

dotenv.config();

const username = 'root'
const database = 'zzzbuilds'
const password = 'ellenjoe'
const host = 'localhost'
const db_port = 3306

const USER = encodeURIComponent(username);
const PASSWORD = encodeURIComponent(password);


export const pool = mysql2.createPool({
    host: host,
    user: USER,
    password: PASSWORD,
    database: database,
    port: db_port, 
});

export const validateConnection = async () => {
    try {
        await pool.query('SELECT 1 + 1');
        console.log('Connection success!');
    } catch (error) {
        console.error('Error connection:', error);
    }
};
