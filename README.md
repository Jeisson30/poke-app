# PRUEBA POKE-APP

Requerimientos basicos:

Es importante que tenga nodeJS instalado es su maquina local para  poder correr el proyecto. 
El proyecto usa version de node 18.17.0, si tiene el paquete npm instalado puede cambiar a distintas versiones de node con el comando

nvm use (version-node) - nvm use 18.17.0 o puede instalarla con nvm install 18.17.0

El proyecto esta en repositorio GitHub y se trabaja bajo el metodo de trabajo gitFlow, se trabajo en la rama develop y una vez se realizaban commits donde las funcionalidades del proyecyo eran satisfactorias se hacia el push a develop y posteriormente se realizó un PR a la rama principal main. Esto con el objetivo de tener un orden de trabajo en desarrollo.

Repositorio:

https://github.com/Jeisson30/poke-app

clone el proyecto desde la rama principal main.

git clone -b main nombre_rama

Cuando el proyecto termine de clonar satisfactoriamente, porfavor se sugiere que ponga la version de node 18.17.0
recuerde en la seccion mas arriba como instalar y colocar la version de node para este proyecto.

una vez tenga la version node por favor verifique que se encuentre dentro de la carpeta raiz y verifique la version de node con el siguiente comando:

node -v

en la terminal debera visualizar:
v18.17.0

de lo contrario por favor digite 
nvm use 18.17.0

luego instale dependencias, esto es fundamental para la ejecucion del proyecto:

npm install ,

si por alguna razon se present aun error, se debe mirar mas a fondo algun conflicto de dependencias pero para visualizar el proyecto ejecute

npm install --legacy-peer-deps

una vez  que las dependecias esten descargadas proceda a correr el proyecto dentro de la carpeta raiz, en este caso poke-app:

npm start.

Esta configurado para correr en local y podra explorar los requerimientos del desarrollo.

Algunas de las funcionalidades que encontrara:

Se conecta a la api pokeApi
Lista de todos los pokemon con informacion relevante, tipo o tipos y colores de acerdo a su tipo.
La lista contiene mas de los mil pokemon que contiene, el scroll es vertical y a medida que baja se ira cargando la información con nuevos pokemon dinamicamente.
POPup al seleccionar un pokemon, encontrara ademas informacion del area donde se encuentra para capturarlo.
Diagramas para visualizar que cantidad de pokemon hay por cada tipo.

Se realizo una arquitectura limpia, donde todo es modular, lo que hace que sea mas facil de mantener y escalable.
Se opto para visualizar los diagramas la biblioteca recharts ya que es comoda y facil de usar.
Por preferencia se uso css puro y no alguna herramienta externa para validar conceptos y aplicacion de estilos.
Para las peticiones de uso fetch por su facilidad y que es integrado de ts.



