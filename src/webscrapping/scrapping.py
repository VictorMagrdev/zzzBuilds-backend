import os
import requests
from bs4 import BeautifulSoup

# URL de la web objetivo
url = "https://zenlessdiary.com/characters/"

# Realizar solicitud HTTP
response = requests.get(url)

# Parsear el HTML con BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")

# Encontrar todas las imágenes en la página
imagenes = soup.find_all("img")

# Crear un directorio para almacenar las imágenes
directorio = "imagenes"
if not os.path.exists(directorio):
    os.makedirs(directorio)

# Descargar cada imagen
for img in imagenes:
    src = img.get("src")
    if src:
        # Verificar si la imagen es relativa o absoluta
        if src.startswith("http"):
            url_img = src
        else:
            url_img = url + src

        # Descargar la imagen
        response_img = requests.get(url_img)
        with open(os.path.join(directorio, os.path.basename(url_img)), "wb") as f:
            f.write(response_img.content)

        print(f"Imagen descargada: {url_img}")
