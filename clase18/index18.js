//SERVIDOR CON MODULO NATIVO DE NODE JS

/*const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});*/

// SERVIDOR CON EXPRESS (NODULO DE TERCEROS)

/* Creamos una constante que utiliza todo el codigo del express: */

const express= requiere(`express`); 

/*(primero pongo esto para traer todo el codigo de terceros que usa express*

despues de eso necesito crear un puerto para que el servidor escuche las peticiones:*/

const port= 3000;

// Creo una variable y ejecuto todas las funciones de express

const app= express();

//Respuesta del servidor al Browser
app.get(`/`, function(peticion, respuesta){
    respuesta.send(`Hola, soy el servidor respondiendo a una petición`)
});

/*app.get("", () => {});
console.log(peticion.url);
console.log(peticion.method);
console.log(peticion.protocol);
respuesta.send(`Hola, soy el Servidor respondiendo tu petición`)*/

// Configuro puerto y la respuesta del servidor
app.listen(Port,() =>{
    console.log(`Servidor escuchando peticiones HTTP en el Puerto: ${Port}`);
});
