import { pool } from "../db.js";


//Controlador para obtener los empleados
export const getEmpleados = async (req, res) => {
    //Creamos la consulta para traer los empleados
  const [rows] = await pool.query("SELECT * FROM empleados");
  //Respondemos en formato json lo que encontramos en la BD
  res.json(rows);
};

//Controlador para obtener un empleado
export const getEmpleado = async (req, res) => {
       //Creamos la consulta para traer un empleado
  const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
    req.params.id,
  ]);

    //Validamos si el empleado existe en la BD
  if (rows.length <= 0) {
    return res.status(404).json({ message: "Empleado no encontrado" });
  }
  res.json(rows[0]);
};

//Controlador para crear los empleados
export const createEmpleados = async (req, res) => {
  const { name, salary } = req.body;

    //Creamos la consulta para insertar el empleado en la BD
  const [rows] = await pool.query(
    "INSERT INTO empleados (name,salary) values(?,?)",
    [name, salary]
  );
    //Enviamos la respuesta en el formato JSON
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

//Controlador para eliminar los empleados
export const deleteEmpleados = async (req, res) => {
    //Creamos la consulta para eliminar un empleado en especifico
  const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [
    req.params.id,
  ]);

    //Validamos si el empleado existe en la BD
  if (result.affectedRows <= 0) {
    return res.status(404).json({ message: "Empleado no encontrado" });
  }
    //No respondemos nada pero hacemos saber que si se realizo la operacion
  res.sendStatus(204);
};

//Controlador para actualizar los empleados
export const updateEmpleados = async(req, res) => {
    const {id} = req.params
    const {name, salary} = req.body

   const [result] = await pool.query("UPDATE empleados SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?",  [name, salary, id]);

    if(result.affectedRows == 0) {
        return res.status(404).json({message: 'Empleado no encontrado'});
    }

    const [rows]=await pool.query("SELECT * FROM empleados WHERE id = ?", [id])

    res.json(rows[0])
};
