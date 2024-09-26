import "dotenv/config"
import mysql2 from "mysql2/promise"

const username = 'root'
const database = 'zzzBuilds'
const password = ''
const host = 'localhost'
const db_port = '3306'

const USER = encodeURIComponent(username)
const PASSWORD = encodeURIComponent(password)

const URI = `mysql://${USER}:${PASSWORD}@${host}:${db_port}/${database}`

export const pool = mysql2.createPool({ uri: URI })
export const validateConnection = () => {
  pool.query('select 1 + 1')
  .then(() => console.log('Connection success!'))
  .catch((error) => console.error('Error connection', error))
}
