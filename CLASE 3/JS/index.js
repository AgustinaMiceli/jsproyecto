
const express = require('express');
const app= express(); 
require ('dotenv').config(); 
const Port = process.env.PORT || 8080; 
const hbs = require('hbs');
const mysql= require('mysql2');
const path= require('path'); 
const nodemailer= require('nodemailer'); 
const { restart } = require('nodemon');


//Conectamos la app a una base de datos
const conexion = mysql.createConnection({
    host: process.env.HOST, 
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORTDB, 
    database: process.env.DATABASE,
});

// Conectamos la DB
const conectar = (
        conexion.connect((error)=>{
        if(error) throw error;
        console.log('Base de Datos Conectada!!');
    }) 
);

//Configuración de Middelwares (funciones por las cuales pasan todos los datos que entran y salen de determinada forma)
app.use(express.json());
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:false}));

//Configuramos la Vista de la Aplicacion
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));



/*app.get('/', (req, res) =>{
res.send('Nos estamos conectando a una Base de Datos')
});*/


app.get('/', (req, res) =>{
    res.render('index', {titulo:'Bienvenido a nuestra App'})
});


app.get('/html', (req, res) =>{
    res.sendFile('index20.html')
});


app.get('/contacto', (req, res) =>{
    res.render('contacto', {titulo:'Formulario para completar'})
});

  // VERBO HTTP PARA RECIBIR DATOS
app.post('/contacto', (req, res)=>{
    //res.sendStatus(200).send('Tus datos han sido recibidos')
    
    console.log(req.body);


//DESESTRUCTURACION 
/*console.log(req.body.nombre);
console.log(req.body.precio);
console.log(req.body.descripcion);*/

/*otra forma de desestructurar:*/

const {id, nombre, apellido, correo,mensaje} = req.body;


//Validacion basica

let validacion = 'Faltan datos para enviar el mensaje'

if(nombre == "" || correo == ""){
res.render('contacto', {
    titulo:'Formulario para completar',
    validacion
})
}else{
    console.log(nombre);
    console.log(apellido);
    console.log(correo);
    console.log(mensaje);
   
    //conectar()

let data ={
    cliente_id: id,
    cliente_nombre: nombre,
    cliente_apellido: apellido,
    cliente_correo: correo,
    cliente_mensaje: mensaje, 
}


let sql = "INSERT INTO CLIENTE SET ?";

let query = conexion.query(sql, data, (error, results) =>{
    if (error) throw error;
    res.render('Contacto', {titulo:'Formulario para completar'})
});
}
});

app.get('/contacto', (req, res) =>{

    let sql = "SELECT * FROM CLIENTE";

    let query = conexion.query(sql, (error, results) =>{
        if (error) throw error;
        res.render('contacto', {titulo:'Consulta de clientes',
        results})
    });   
});

app.post('/login', (req, res) =>{
    console.log(req.body);
    res.send('Tus datos correctos')

});


app.get('/login', (req, res) =>{
    res.render('login', {titulo: 'Ingresa tus datos para el Login'})
   
});



app.get('/contacto', (req, res) =>{
    res.render('contacto', {titulo:'Escribenos'}) });






app.listen(Port, ()=>{
console.log(`Servidor corriendo en el Puerto ${Port}`);

})

app.on('error', (error) =>{
console.log(`Tenemos un error ${error}`);

})