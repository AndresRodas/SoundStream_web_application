# Proyecto 1 - Grupo 13
## Integrantes
| Carnet     | Nombre                     |
| ---------  | -------------------------- |
| 201504220  | José Andres Rodas Arrecis          |
| 201314808  | Leslie Fabiola Morales Gonzalez    |
| 201513699  | Esdras Jonatan Noj Larios          |
| 201800699  | Ronald Alexandro Castro Pérez      |
| 201800586  | Gerber David Colíndres Monterroso  |

---

# SoundStream
SoundStream es una plataforma de streaming de música cuya intención es promover el arte en el territorio Guatemalteco, prometiendo una experiencia robusta, confiable y amigable para sus clientes. Es una plataforma completamente en la nube, diseñada para ser utilizada en cualquier navegador Web. 

Los usuarios pueden utilizar este sistema y decidir suscribirse a un plan básico o premium, el cual cuenta con varias funcionalidades adicionales.  El sistema permite a los usuarios escuchar sus canciones favoritas, crear y reproducir playlists personalizadas y escuchar la radio.

## Interfaz de Usuario

### Inicio de Sesión

Al ingresar a la aplicación web de SoundStream lo primero que veras es la interfaz de inicio de sesion, en esta pagina encontraras varias opciones

![](https://i.imgur.com/crZh3N1.png)

Del lado derecho encontraras una pequeña barra de opciones de inicio, del lado izquierdo te encontraras con una imagen satisfactoria generada aleatoriamente.

En la barra de inicio encontraras dos pequeños cuadros de texto los cuales sirven para el ingreso del correo y la contraseña previamente registrados en el sistema, junto con un pequeño checkbox que indica que deseas recordar tu usuario para un inicio de sesion mas fácil.  

![](https://i.imgur.com/JRyOdcU.png)

Si aun no tienes con una cuenta, puedes registrarte con la opción de "Aun no tienes una cuenta? Registrate" este enlace te conducira a la pagina de registro de la aplicación.  

De igual manera si olvidaste la contraseña o tus credenciales de inicio de sesion puedes seleccionar la opcion de "Olvidaste tu contraseña?" para dirigirte a la pagina de recuperación de cuenta.

![](https://i.imgur.com/NyAFLF5.png)

### Página de Inicio

Esta es la pagina principal de la aplicación web, y es la primera en aparecer luego de iniciar sesión.  En ella se encuentran todas las funcionalidades de SoundStream, en las siguientes secciones se detallan de una forma mas específica cada una de las funciones de la plataforma.

![](https://i.imgur.com/gZKyAUP.png)

### Navegación
En la parte izquierda de la interfaz de inicio encontramos una pequeña pero útil barra de navegación, en ella encontraremos las siguientes opciones.

![](https://i.imgur.com/db0jG6s.png)

#### Inicio
Al dar click en esta opcion nos dirigiremos a la pantalla de inicio desde cualquier punto de la aplicación.  El logotipo SoundStream también funciona como un boton de Inicio.

#### Buscar
Esta opción nos envía a un pequeño segmento en donde podremos realizar la busqueda de alguna cancion, artista, álbum o playlist en específico.

#### Playlist
Aqui encontraremos todas las playlist que se hayan guardado y también tendremos la opción de crear una nueva playlist.

#### Imagen de reproducción
Finalmente en la parte inferior de la barra de navegación encontraremos la imagen del álbum de la cancion que tengamos actualmente en reproducción, si no tenemos ninguna canción en reproducción no se mostrará ninguna imagen.

### Mensaje de Bienvenida
Unicamente se trata de un breve saludo de bienvenida, el saludo dependera de la hora y del dia en el que te encuentres.

![](https://i.imgur.com/9Xoh6u7.png)

### Reproductor
El reproductor es la funcion principal de SoundStream, ya que es el que nos permite reproducir y controlar las pistas.  El reproductor se encuentra en la parte inferior izquierda y cuenta con las siguientes características.

![](https://i.imgur.com/uYoq2Ri.png)

#### Barra de Progreso
Es una barra que ocupa casi todo el largo del reproductor, nos indica el progreso de la canción que se está reproduciendo.  Con esta barra podemos adelantar o regresar la secuencia de la canción.

#### Control Siguiente/Anterior
Se trata de dos botones, los cuales nos permiten navegar entre las canciones ya sea la siguiente o la anterior en la lista de reproducción actual.

#### Control Play/Pausa
Este boton se encuentra en el centro del reproductor y nos permite pausar la cancion o volver a reprducirla.

#### Control Avanzar/Retroceder
Esta funcionalidad cuenta con dos botones ubicados al lado del boton de pausa/play y su funcionalidad es avanzar cierta cantidad de tiempo una cancion, esto facilita el manejo del progreso de la pista actual.

![](https://i.imgur.com/8nbEbfV.png)

#### Manejo del Volumen
Es un pequeño indicador ubicado en la parte inferior derecha de nuestro reproductor y nos permite subir o bajar el volumen según sea nuestra necesidad.

![](https://i.imgur.com/gzskmLM.png)

#### Repetir Lista
Es un pequeño boton que se encuentra en la parte inferior izquierda del reproductor, nos permite activar o desactivar la funcion de repeticion de la lista actual.

![](https://i.imgur.com/XNUYBZD.png)

![](https://i.imgur.com/hCZ1XlW.png)

#### Tiempo de Reproducción
El tiempo de reproducción está dividido en dos partes, el tiempo transcurrido de la pista actual y el tiempo que sobra de reproducción de la pista actual.  Estos indicadores se encuentran distribuidos al lado de la barra de progreso del reproductor.

#### Información de la canción
En la parte superior derecha del reproductor encontramos la información de la pista en repriducción, esta información consta del nombre de la cancion seguido por el nombre del artista.

#### Controles de Teclado
Por último pero no menos importante, el reproductor cuenta con una muy útil opción de control por teclas, esto significa que los controladores anteriormente mensionados pueden ser dirigidos desde el teclado del ordenador.  Las funcionalidades añadidas son las siguientes.

| Key Binding    | Action                     |
| ---------      | -------------------------- |
| Space          | Play/Pause                 |
| ←              | Rewind                     |
| →	             | Forward                    |
| ↑              | Volume up                  |
| ↓              | Volume down                |
| L              | Toggle loop                |
| M              | Toggle mute                |

### Radio
Una de las principales y entretenidas funcionalidades de SoundStream es que cuenta con una opción de "Radio".  En esta opción podemos escuchar de manera aleatoria todas las pistas que esten registradas en SoundStream.

![](https://i.imgur.com/3ZgtGjn.png)

### Explorar Álbumes
En esta sección podremos visualizar y seleccionar todos los albumes que estan registrados en el sistema.  Los albumes se muestran en forma de card desplegando su imagen caracteristica, el nombre del album y el artista autor de dicho album.

![](https://i.imgur.com/jSgLGbD.png)

Al seleccionar un album nos dirigiremos a una pagina en donde se detalla el nombre del album, el artista, la imagen de dicho album, la cantidad de likes y la duración del mismo.  Ademas tenemos las opciones de reproducir todo el album y agregarlo a favoritos.

![](https://i.imgur.com/tqWWcNp.png)

Si nos movilizamos un poco hacía abajo visualizaremos el listado de canciones que componen el album, con su nombre y el nombre del autor, ademas de la opcion de reproducir dicha cancion y una leyenda en la parte derecha que muestra la duración de la canción.

![](https://i.imgur.com/9fcc0d7.png)

### Explorar Pistas
Por último pero no menos importante SoundStream cuenta con la opción de explorar todas las canciones que estan disponibles en el repertorio de canciones.

![](https://i.imgur.com/VKdkwR8.png)

Al ingresar a dicha opcion se desplegará una vista parecida a la exploración de albumes, pero en ella se despliega la lista de todas las canciones registradas en el sistema.

![](https://i.imgur.com/8921aLN.png)

---

> Grupo 13 -- Proyecto Fase 1 -- Analisis y Diseño de Sistemas 2