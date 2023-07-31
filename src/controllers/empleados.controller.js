import {pool} from "../db.js";

//Controlador para obtener los empleados
export const getEmpleados = async(req, res) => {
   const [rows] = await pool.query('SELECT * FROM empleados')
   res.json(rows)
}

//Controlador para crear los empleados
export const createEmpleados = async (req, res) => {
    const {name,salary} = req.body;

    const [rows] = await pool.query('INSERT INTO empleados (name,salary) values(?,?)',[name,salary])

    res.send({
        id: rows.insertId,
        name,
        salary,
    })
}
//Controlador para actualizar los empleados
export const updateEmpleados = (req, res) => res.send('Actualizando empleados')

//Controlador para eliminar los empleados
export const deleteEmpleados = (req, res) => res.send('Eliminando empleados')