import { Router } from "express";

//Importamos los controllers para nuestras rutas
import { getEmpleados, createEmpleados, updateEmpleados, deleteEmpleados, getEmpleado } from "../controllers/empleados.controller.js";

const router = Router();

//Ruta get para obtener los empleados
router.get('/empleados', getEmpleados )

//Ruta get para obtener los empleados por ID
router.get('/empleados/:id', getEmpleado )

//Ruta post para crear un empleado
router.post('/empleados', createEmpleados)

//Ruta put para actualizar un empleado
router.patch('/empleados/:id', updateEmpleados)

//Ruta delete para borrar un empleado
router.delete('/empleados/:id', deleteEmpleados)


export default router