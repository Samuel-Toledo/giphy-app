# Giphy App

Este repositorio almacena la aplicación Giphy App.

```
git config --global user.name "Samuel Toledo"
 git config --global user.email samueltoledo.bmanagement@outlook.com   
 git config --global -e

git init inicia repositorio
Git status 
Si la rama princioal no se llama main se renombra con:
git branch -M main

Configurar rama principal a main por deffalut
git config --global init.defaultBranch main

Para dar seguimieto a un archivo(agregar al repositorio) se usa
git add "Nombre del archivo"

Para (dar seguimiento) eliminarlo es
git reset "Nombre del archivo"
Para que persevere se usa
git commit-m "MENSAJE PERSONALIZADO"

Para hcer un tipo de ctrl Z o devolver el archivo al ultimo commit
git checkout .

Para modificar y commit un archivo existente y los que ya tengan con seguimiento
git commit -am "MENSAJE PERSONALIZADO"

Agregamos un orignen remoto al repositorio local
git remote add "NOMBRE DEL REMOTO USUALMENTE ORIGIN" "URL DEL REPOSITORIO EN GITHUB"

Cargamos los cambios al remoto y rama definidos
git push"NOMBRE DEL REMOTO ORIGIN" "NOMBRE DE LA RAMA EN QUE TRABAJAMOS MAIN"

CARGAR CAMBIOS AL REMOTO Y DEFFINIR DICHO REMOTO COMO DEFAULT
git push -u "NOMBRE DEL REMOTO" "NOMBRE DE LA RAMA EN QUE TRABAJAMOS"

```