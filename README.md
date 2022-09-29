# Infraestructura Virtual - Francisco Javier Romero García Curso 2022-2023.
## MangaForum

### Problema:

  El mundo del manga y la novela ligera es muy amplio, y puede ser tedioso el encontrar nuevas obras que leer o introducirse en él e incluso discutir sobre ellas tanto para gente nueva como para veteranos en este mundillo.
  
### Solución:
  
  Con esta aplicación recibirás según el analísis de tu historial de lecturas totales y el de últimas lecturas (solo deberá introducir sus datos de su cuenta de MyAnimeList), nuevas obras para leer, teniendo en cuenta los géneros mas repetidos en dichas obras y la puntuación de ellas del resto de usuarios.
  
 ### Lógica de negocio
 Recomendación de mangas/webtoons mediante dos sistemas diferentes
  - Gente sin previa experiencia en manga, sistema de popularidad: en el que se recomendarán las obras más populares entre los usuarios.
  - Gente con experiencia, sistema de contenido :  a traves de la evaluación de obras previamente leidas por el usuario (las cuales son obtenidas a traves de la API anteriormente mencionadas, para ello el usuario debe tener mangas añadidos en su lista previamente en la pagina con la que trabaja la API) se le recomendaran obras que le sean adecuadas según los géneros que más a consumido el usuario.
  
  ---
