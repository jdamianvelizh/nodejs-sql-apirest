import  express from "express";

//Importacion del los archivos de rutas 
import empleadosRoutes from './routes/empleados.routes.js'
import indexrRoutes from './routes/index.routes.js'

//Creacion de una constante para utilizar Express
const app = express()


//Se convertiran los datos en formato JSON 
app.use(express.json())

//Utilizamos las rutas creadas en la carpeta routes
app.use(indexrRoutes)
app.use('/api',empleadosRoutes)
app.use((req, res, next) =>{
    res.status(404).json({message: 'Not found endopoint'});
})


export default app;