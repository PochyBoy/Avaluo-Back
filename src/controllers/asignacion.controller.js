import { getConnection, querys, sql } from "../database";




/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    cat_asignacion:
 *      type: object
 *      properties:
 *        numero_solicitud:
 *          type: string 
 *          description: El codigo de asignacion
 *        solicitante:
 *          type: string
 *          description: Desribrir
 *        estado:
 *          type: boolean 
 *          description: El estado binario o booleano del asignacion
 *        fecha_alta:
 *          type: date
 *          description: Fecha de alta del asignacion 
 *        fecha_baja:
 *          type: date
 *          description: Fecha de baja del asignacion
 *        fecha_modi:
 *          type: date
 *          description: Fecha de modificación del estado
 *      required:
 *        - codigo
 *        - descripción
 *        - estado
 *      example:
 *        codigo: 722222
 *        descripcion: La descripción necesario 
 *        estado: 1
 * 
 * 

 */


/**
 * @swagger
 * /api/asignacion:
 *  post:
 *    summary: Crea una nueva asignacion
 *    tags: [asignacion]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_asignacion'
 *    responses:
 *      200:
 *        description: Nuevo asignacion fue creado
 */


/**
 * @swagger
 * /api/asignacion:
 *  get:
 *    summary: Retorna todo las asignaciones
 *    tags: [asignacion]
 *    
 *    responses:
 *      200:
 *        description: Da todos los asignacion
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_asignacion'
 */

/**
 * @swagger
 * /api/asignacion/{id_asignacion}:
 *  get:
 *    summary: Retorna una asignacion específico
 *    tags: [asignacion]
 *    parameters:
 *      - in: path
 *        name: id_asignacion
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de la asignacion    
 *    responses:
 *      200:
 *        description: Da todas las asignacion
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_asignacion'
 *      404:
 *        description: asignacion no encontrado
 */


/**
 * @swagger
 * /api/asignacion/{id_asignacion}:
 *  delete:
 *    summary: Elimina una asignacion específico
 *    tags: [asignacion]
 *    parameters:
 *      - in: path
 *        name: id_asignacion
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del asignacion    
 *    responses:
 *      200:
 *        description: asignacion eliminado
 *      404:
 *        description: asignacion no encontrado
 */


/**
 * @swagger
 * /api/asignacion/{id_asignacion}:
 *  delete:
 *    summary: Elimina una asignacion específico
 *    tags: [asignacion]
 *    parameters:
 *      - in: path
 *        name: id_asignacion
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de asignacion    
 *    responses:
 *      200:
 *        description: asignacion eliminado
 *      404:
 *        description: asignacion no encontrado
 */


/**
 * @swagger
 * /api/asignacion/{id_asignacion}:
 *  put:
 *    summary: Actualiza asignacion específico
 *    tags: [asignacion]
 *    parameters:
 *      - in: path
 *        name: id_asignacion
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de asignacion   
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_asignacion' 
 *    responses:
 *      200:
 *        description: asignacion actualizado
 *      404:
 *        description: asignacion no encontrado
 */




export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllasignacion);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewasignacion = async (req, res) => {
  const { codigo } = req.body;
  let { descripcion,estado ,fecha_alta, fecha_baja, fecha_modi } = req.body;

  // validating
  if (codigo == null ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }



  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("codigo", sql.VarChar, codigo)
      .input("descripcion", sql.Text, descripcion)
      .input("estado", sql.Bit, estado)
      .input("fecha_alta", sql.Date, fecha_alta)
      .input("fecha_modi", sql.Date, fecha_modi)
      .input("fecha_baja", sql.Date, fecha_baja)
      .query(querys.addNewasignacion);

    res.json({ codigo, descripcion, estado, fecha_alta, fecha_baja, fecha_modi });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getasignacionById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_asignacion", req.params.id_asignacion)
      .query(querys.getasignacionById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteasignacionById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_asignacion", req.params.id_asignacion)
      .query(querys.deleteasignacion);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalasignacion = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalasignacion);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updateasignacionById = async (req, res) => {
  const { descripcion, codigo, estado, fecha_alta, fecha_baja, fecha_modi } = req.body;

  // validating
 
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("codigo", sql.VarChar, codigo)
      .input("descripcion", sql.Text, descripcion)
      .input("estado", sql.Bit, estado)
      .input("fecha_alta", sql.Date, fecha_alta)
      .input("fecha_modi", sql.Date, fecha_modi)
      .input("fecha_baja", sql.Date, fecha_baja)
      .input("id_asignacion", req.params.id_asignacion)
      .query(querys.updateasignacionById);
    res.json({ descripcion, codigo, estado, fecha_alta, fecha_baja, fecha_modi});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
