import os
import requests
from bs4 import BeautifulSoup

def obtener_enlaces(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    
    contenedor = soup.find(class_="gb-container gb-container-9c65b73c characters")
    lista_enlaces = set()

    if contenedor:
        enlaces = contenedor.find_all("a")
        for enlace in enlaces:
            href = enlace.get("href")
            if href:
                lista_enlaces.add(href)

    return lista_enlaces

def crear_directorio(directorio):
    if not os.path.exists(directorio):
        os.makedirs(directorio)

def descargar_imagen(url_img, directorio):
    response_img = requests.get(url_img)
    image_name = os.path.basename(url_img)
    with open(os.path.join(directorio, image_name), "wb") as f:
        f.write(response_img.content)
    print(f"Imagen descargada: {url_img}")

def obtener_imagen_personaje(url_personaje):
    response = requests.get(url_personaje)
    soup = BeautifulSoup(response.content, "html.parser")
    
    contenedor_imagen = soup.find(class_="gb-grid-column gb-grid-column-88d03469")
    if contenedor_imagen:
        img = contenedor_imagen.find("img")
        if img:
            return img.get("src")
    return None

def obtener_estadisticas_personaje(url_personaje):
    response = requests.get(url_personaje)
    soup = BeautifulSoup(response.content, "html.parser")
    
    stats_dict = {}
    contenedor_estadisticas = soup.find(class_="gb-container gb-container-daff2a20")

    if contenedor_estadisticas:
        filas_estadisticas = contenedor_estadisticas.find_all("div", class_="stat-column")
        for fila in filas_estadisticas:
            stats_name = fila.find("div", class_="stats-name")
            stats_value = fila.find("div", class_="stat-value")
            if stats_name and stats_value:
                nombre = stats_name.get_text(strip=True)
                valor = stats_value.get_text(strip=True)

                if nombre == "Attribute Mastery":
                    nombre = "Anomaly Mastery"
                
                stats_dict[nombre] = valor

    return stats_dict


def main():
    url_principal = "https://zenlessdiary.com/characters/"
    directorio = "imagenes"

    lista_enlaces = obtener_enlaces(url_principal)
    crear_directorio(directorio)

    for enlace in lista_enlaces:
        src_imagen = obtener_imagen_personaje(enlace)
        if src_imagen:
            if src_imagen.startswith("http"):
                url_img = src_imagen
            else:
                url_img = url_principal + src_imagen
            
            descargar_imagen(url_img, directorio)
            estadisticas = obtener_estadisticas_personaje(enlace)
            print(f"Estadísticas para {enlace}: {estadisticas}")

if __name__ == "__main__":
    main()
