/*PARA INICIAR EL PROYECTO
// 1. Inicio un proyecto con npm init y respondo las cosas que me aparecen O lo puedo iniciar directamente con npm init -y (se pone solo, no me pregunta nada)
//2. Instalo las dependencias que necesito
//3.  npm install express / nmp i express (para instalar una libreria que necesito)
//4. Si quiero instalar nodemon:  npm install nodemon
//5. Para personalizar el arranque de la aplicacion vamos a  package.json*/

//6. Importamos las librerias que necesitamos
const express = require(`express`);



//8. Creamos un puerto para que nuestro servidor escuche las peticiones
const Port= 8080;

//7. Ejecutamos las funciones de Express para utilizarlas
const app = express(); 


//15. Middelware: Es una funcion nativa de express por donde pasan las peticiones
app.use(express.static(__dirname + '/public'));


//11. Generamos recursos para los clientes mediante los vernos http (metodos del punto 10)
//app.get('ruta', respuesta)


app.get('/', function (peticion, respuesta){

    console.log(peticion.url);
    console.log(peticion.headers);
    console.log(peticion.body);
    console.log(peticion.get); 

    respuesta.send(`Hola, soy el servidor del Software!`)
    });


//14. Respuesta general para las rutas

app.get('/productos',(req, res) =>{
rest.send('<h1>Somos la empresa X  que ofrecemos los siguientes productos: </h1>'),
});

app.get('./contacto', (req, res)=>{
    console.log(__dirname);
res.sendFile('index19.html';
{root:__dirname + '/public'});
});



//9. Ponemos el servidor a la escucha de las peticiones

app.listen(Port, ()=>{
    console.log(`Servidor corriendo en el puerto ${Port}`);
})

//10. Atendemos cualquier error de nuestro server, si no se el error (porque son numeros) entra a https://developer.mozilla.org/es/docs/Web/HTTP/Status y fijate cual es 
// tambien podes ver los métodos de error en httml://developer.mozilla.org/es/docs/Web/HTTP/Methods
app.on('error', (error)=>{
    console.log(`El servidor tiene un error ${error}`);
})



