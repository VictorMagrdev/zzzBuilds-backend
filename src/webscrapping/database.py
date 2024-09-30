import mysql.connector

def conectar_db():
    conexion = mysql.connector.connect(
        host="localhost",
        user="root",
        password="ellenjoe"
    )
    cursor = conexion.cursor()
    return conexion, cursor

def crear_base_datos_y_tabla(cursor):
    cursor.execute("CREATE DATABASE IF NOT EXISTS zzzBuilds")
    cursor.execute("USE zzzBuilds")
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS personajes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        imagen VARCHAR(255) NOT NULL,
        hp INT,
        def INT,
        atk INT,
        impact INT,
        anomaly_mastery INT,
        anomaly_proficiency INT
    )
    ''')

def almacenar_personaje(cursor, nombre, imagen, estadisticas):
    cursor.execute('''
    INSERT INTO personajes (nombre, imagen, hp, def, atk, impact, anomaly_mastery, anomaly_proficiency)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
    ''', (
        nombre,
        imagen,
        int(estadisticas.get('HP', 0)), 
        int(estadisticas.get('DEF', 0)), 
        int(estadisticas.get('ATK', 0)), 
        int(estadisticas.get('Impact', 0)), 
        int(estadisticas.get('Anomaly Mastery', 0)), 
        int(estadisticas.get('Anomaly Proficiency', 0))
    ))
