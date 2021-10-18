# LITEFLIX 🎬

En este proyecto utilicé la API pública The Movie DB (https://www.themoviedb.org/documentation/api/discover)

El diseño responsive está codeado en SASS 💅 las interacciones y estados también.

 Las animaciones que se pueden ver en Home las hice con React Reveal (https://www.react-reveal.com/)
 
 Usuaria/o podrá cargar sus propias películas con un botón desde la Navbar. Para agregar el título utilicé Context, uuid para agregar IDs de forma dinámica y localStorage, ya que también deben verse en Home.
 
 En cuanto a las imágenes subidas a través de Dropzone la funcionalidad está lograda, sólo falta poder guardar esas imágenes de forma dinámica con localStorage como ya lo estoy haciendo con el título de la película.
 
 El proyecto cuenta con tres Context: 
 1) Dropzone Context: Actualmente lo utilizo para poder enviar alertas en caso de que el archivo no corresponda o supere el límite máximo. Luego se deberá utilizar para poder guardar las imágenes en localStorage y que el usuario/a pueda tener una experiencia plena.
 2) Movie Context: Se creó con el fin de poder tener los datos del formulario "Agregar película" de forma global.
 3) API Context: Se creó con el fin de poder hacer llamadas a la API de forma global. Dejando así el código de los componentes más limpios y reutilizables.
 
 ## Demo🚀
 https://liteflix-phi.vercel.app/
 
 
 ### Espero poder seguir avanzando, <strong>¡Muchas gracias por leer!</strong> 😁
 
 
