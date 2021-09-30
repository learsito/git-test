//Comandos básicos git: -git init: para iniciar a utilizar git en el proyecto.
//-git add <file>: Para poder pasar los archivos del 'working directory' al 'staging area'. De este modo ya podemos empezar a trabajar con git en nuestro código.
//-git status: para ver en qué estado están mis archivos. (si están en el 'working directory', en 'staging area' o en 'repository').
//-git commit: para pasar desde el 'staging area' al 'repository'. Es para crear la primera versión. (o el primer "punto de control"). Después de eso, cada commit es una versión nueva, pero antes de hacer un nuevo commit, hay que hacer un git add para añadir al espacio de trabajo el archivo que hemos modificado.
//-git push: es para subirlo a un repositorio remoto, o a un "servidor" para que otros desarrolladores con permiso puedan acceder al código para trabajar con él.
//-git pull: en caso de estar trabajando en un código que está en un repositorio remoto, hace que te traigas los cambios que los demás han hecho al código.
//-git clone: hace una copia desde el servidor central donde está el código a tu computadora local para empezar a trabajar.
//-git log: para diferenciar cada versión o punto de control.
//-git checkout -- <archivo>: para descartar los cambios del archivo seleccionado.
//-git diff <archivo>: Para observar los cambios que se le han hecho al archivo seleccionado que aún no estpan en 'commit'
//-git reset <archivo>: sería lo contrario de "git add" para sacar un archivo del espacio de trabajo.
//Para tener archivos locales que queremos que git ignore, hay que crear un archivo llamado ".gitignore" y dentro de ese archivo escribir el nombre de las carpetas y/o archivos que queremos que ignore.
//-git commit -m "mensaje": para hacer el commit más rápido y evitar tener que entrar al editor de codigo.
//-git branch y -git branch <nombre>: La primera para mirar el nombre de nuestra linea de versiones que tenemos, y la segunda para crear una línea nueva (o versiones alternativas, como multiversos jaja)
//-git checkout <nombre de la línea de versiones>: para moverte a la línea de versiones deseada.
//-git add . (git add "punto"): para añadir todos los archivos sin necesidad de ir uno por uno.
//-git remote add origin <direccion de mi repositorio de github>: Para subir mi proyecto ya en commit a la nube en github. En este caso la dirección sería: https://github.com/learsito/git-test.git
