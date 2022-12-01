| Comando             | Descripción                                                                                                                 |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------|
| npm init -y         | Inicializa el proyecto en Node.js y crea el archivo package.json                                                            |
| npm install Express | Instala Express en el proyecto                                                                                              |
| npm i nodemon -D    | Instala nodemon como dependencia de desarrollo sirve para reiniciar el servidor cada vez que se haga un cambio en el código |


sendStatus: Código de estado de respuesta HTTP.
Cunado se manda un código de estado de respuesta HTTP, se manda un mensaje de estado de respuesta HTTP, para finalizar la respuesta sin mensaje se usa .end().

- No se pueden enviar dos respuestas
