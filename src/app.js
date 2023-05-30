import express from "express";
import {pool} from './db.js'
import {PORT} from './config.js'

const app = express();

app.get('/', (req,res) =>{
    res.send('Bienvenido al servidor otra vez 3')
})

app.get('/ping', async (req,res) =>{
    const [result] = await pool.query(`select nombre from clientes`)
    //const result =pool.query(`select "HOLA"`)
     res.json(result)
})

app.get('/create', async (req,res) =>{
    const result = await pool.query(`insert into clientes(nombre) VALUES ("insertado01") `)
    //const result =pool.query(`select "HOLA"`)
     res.json(result)
})


//app.listen(3306);
app.listen(PORT);
console.log('server en el puerto 3000')