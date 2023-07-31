import { Router } from "express";

//Importamos los controllers para nuestras rutas
import { getEmpleados, createEmpleados, updateEmpleados, deleteEmpleados } from "../controllers/empleados.controller.js";

const router = Router();

//Ruta get para obtener los empleados
router.get('/empleados', getEmpleados )

//Ruta post para crear un empleado
router.post('/empleados', createEmpleados)

//Ruta put para actualizar un empleado
router.put('/empleados', updateEmpleados)

//Ruta delete para borrar un empleado
router.delete('/empleados', deleteEmpleados)


export default router