import os
from database import conectar_db, crear_base_datos_y_tabla, almacenar_personaje
from scrapping import obtener_enlaces, crear_directorio, descargar_imagen, obtener_imagen_personaje, obtener_estadisticas_personaje

def main():
    url_principal = "https://zenlessdiary.com/characters/"
    directorio_imagenes = "imagenes"

    lista_enlaces = obtener_enlaces(url_principal)
    crear_directorio(directorio_imagenes)

    conexion, cursor = conectar_db()
    crear_base_datos_y_tabla(cursor)

    for enlace in lista_enlaces:
        nombre_personaje = os.path.basename(enlace.rstrip('/'))
        src_imagen = obtener_imagen_personaje(enlace)

        if src_imagen:
            if src_imagen.startswith("http"):
                url_img = src_imagen
            else:
                url_img = url_principal + src_imagen
            
            descargar_imagen(url_img, directorio_imagenes)
            estadisticas = obtener_estadisticas_personaje(enlace)
            print(f"Estadísticas para {nombre_personaje}: {estadisticas}")
            almacenar_personaje(cursor, nombre_personaje, os.path.basename(url_img), estadisticas)

    conexion.commit()
    cursor.close()
    conexion.close()

if __name__ == "__main__":
    main()
