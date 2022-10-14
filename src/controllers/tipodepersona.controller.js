import { getConnection, querys, sql } from "../database";


/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    cat_asignacion:
 *      type: object
 *      properties:
 *        codigo:
 *          type: string 
 *          description: El codigo de asignacion
 *        descripcion:
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
    const result = await pool.request().query(querys.getAlltipodepersona);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewtipodepersona = async (req, res) => {
  const { codigo } = req.body;
  let { descripcion,estado } = req.body;

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
      .query(querys.addNewtipodepersona);

    res.json({ codigo, descripcion, estado });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const gettipodepersonaById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_tipodepersona", req.params.id_tipodepersona)
      .query(querys.gettipodepersonaById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deletetipodepersonaById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_tipodepersona", req.params.id_tipodepersona)
      .query(querys.deletetipodepersona);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotaltipodepersona = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotaltipodepersona);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updatetipodepersonaById = async (req, res) => {
  const { descripcion, codigo, estado } = req.body;

  // validating
 
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("codigo", sql.VarChar, codigo)
      .input("descripcion", sql.Text, descripcion)
      .input("estado", sql.Bit, estado)
      .input("id_tipodepersona", req.params.id_tipodepersona)
      .query(querys.updatetipodepersonaById);
    res.json({ descripcion, codigo, estado});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
