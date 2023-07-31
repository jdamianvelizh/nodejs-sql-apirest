import  express from "express";

//Importacion del los archivos de rutas 
import empleadosRoutes from './routes/empleados.routes.js'
import indexrRoutes from './routes/index.routes.js'

//Creacion de una constante para utilizar Express
const app = express()

//Utilizamos las rutas creadas en la carpeta routes
app.use(indexrRoutes)
app.use(empleadosRoutes)


//Ponemos a escuchar el servidor en el puerto
app.listen(3000)
console.log("server listening on 3000");
