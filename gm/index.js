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
/* app.use(express.static(path.join(__dirname, "public"))); */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));


app.get('/', (req, res) =>{
    res.render('index', {titulo:'Formulario para completar'})
});

app.get('/abogados', (req, res) =>{
    res.render('abogados' )
});

app.get('/areasdepractica', (req, res) =>{
    res.render('areasdepractica')
});

app.get('/nuestroestudio', (req, res) =>{
    res.render('nuestroestudio')
});

app.get('/contacto', (req, res) =>{
    res.render('contacto')
});

  // VERBO HTTP PARA RECIBIR DATOS
app.post('/contacto', (req, res)=>{

    console.log(req.body);

const {nombre, apellido, mail, consulta} = req.body;


//Validacion basica

let validacion = 'Faltan datos para dejar la consulta'

if(nombre == "" || mail == ""){
res.render('contacto', {
    titulo:'Faltan datos',
    validacion
})
}else{
    console.log(nombre);
    console.log(apellido);
    console.log(mail);
    console.log(consulta);

    //conectar()

let data ={
    producto_id: id,
    cliente_nombre: nombre,
    cliente_apellido: apellido,
    cliente_correo: mail,
    cliente_mensaje: consulta
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
        res.render('contacto', {titulo:'Joia',
        results})
    });   
});

app.listen(Port, ()=>{
    console.log(`Servidor corriendo en el Puerto ${Port}`);
    
    })

    app.on('error', (error) =>{
        console.log(`Tenemos un error ${error}`);
        
        })