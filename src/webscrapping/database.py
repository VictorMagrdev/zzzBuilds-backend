import os
import mysql.connector

# Conectar a la base de datos
conexion = mysql.connector.connect(
    host="localhost",
    user="root",
    password="ellenjoe"
)

cursor = conexion.cursor()

# Crear base de datos y tabla si no existen
cursor.execute("CREATE DATABASE IF NOT EXISTS zzzBuilds")
cursor.execute("USE zzzBuilds")

cursor.execute('''
CREATE TABLE IF NOT EXISTS personajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    imagen VARCHAR(255) NOT NULL
)
''')

directorio_imagenes = "imagenes"

for archivo in os.listdir(directorio_imagenes):
    if archivo.endswith(".png"):
        nombre_original = os.path.splitext(archivo)[0]
        nombre_procesado = nombre_original.replace("-", " ")

        # Solo guarda el nombre del archivo
        cursor.execute('''
        INSERT INTO personajes (nombre, imagen)
        VALUES (%s, %s)
        ''', (nombre_procesado, archivo))  # Cambia aquí para usar solo el nombre del archivo

conexion.commit()
cursor.close()
conexion.close()
