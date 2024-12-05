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


def crear_usuarios(cursor):
    cursor.execute("CREATE DATABASE IF NOT EXISTS zzzBuilds2")
    cursor.execute("USE zzzBuilds2")
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS usuarios (
        id_user serial primary key,
        fullname varchar(200) NOT NULL,
        user varchar(200) NOT NULL,
        email varchar(100) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        state_id int,
        foreign key (state_id) references estados(id_state)
    )
    ''')
    cursor.execute('''
    insert into usuarios (fullname, user, email, password, state_id)
    values
    ('John Doe', 'johndoe', 'johndoe@example.com', 'password123', 1),
    ('Jane Smith', 'janesmith', 'janesmith@example.com', 'password456', 1),
    ('Michael Johnson', 'michaeljohnson', 'michaeljohnson@example.com', 'password789', 1),
    ('Emily Davis', 'emilydavis', 'emilydavis@example.com', 'password111', 1),
    ('David Lee', 'davidlee', 'davidlee@example.com', 'password222', 1)
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


conexion, cursor = conectar_db()

crear_usuarios(cursor)
conexion.commit()
cursor.close()
conexion.close()
