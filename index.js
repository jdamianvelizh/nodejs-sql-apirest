import  express from "express";


const app = express()

app.listen(3000)
console.log("server listening on 3000");

app.get('/empleados', (req, res) => res.send('Obteniendo empleados'))
app.post('/empleados', (req, res) => res.send('Creando empleados'))
app.put('/empleados', (req, res) => res.send('Actualizando empleados'))
app.delete('/empleados', (req, res) => res.send('Eliminando empleados'))