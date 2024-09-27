import os
import mysql.connector

conexion = mysql.connector.connect(
    host="localhost",
    user="root",
    password="ellenjoe"
)

cursor = conexion.cursor()

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
        path_imagen = os.path.abspath(
            os.path.join(directorio_imagenes, archivo))

        cursor.execute('''
        INSERT INTO personajes (nombre, imagen)
        VALUES (%s, %s)
        ''', (nombre_procesado, path_imagen))

conexion.commit()
cursor.close()
conexion.close()
