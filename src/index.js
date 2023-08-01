import app from './app.js';
import {PORT} from './config.js'


//Ponemos a escuchar el servidor en el puerto
app.listen(PORT)
console.log("server listening on", PORT);

