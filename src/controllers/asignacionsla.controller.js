import { getConnection, querys, sql } from "../database";


/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    cat_asignacionsla:
 *      type: object
 *      properties:
 *        codigo:
 *          type: string 
 *          description: El codigo de asignacionsla
 *        actividad:
 *          type: string
 *          description: Desribrir
 *        regla:
 *          type: string
 *          description: Escribir la regla 
 *        tiempo:
 *          type: number
 *          description: Se informa el tiempo
 *        observacion:
 *          type: string
 *          description: Se anota las observaciones
 *        estado:
 *          type: boolean 
 *          description: Se informa el tiempo      
 *        fecha_alta:
 *          type: date
 *          description: Fecha de alta del asignacionsla 
 *        fecha_baja:
 *          type: date
 *          description: Fecha de baja del asignacionsla
 *        fecha_modi:
 *          type: date
 *          description: Fecha de modificación del estado
 *      required:
 *        - codigo
 *        - actividad
 *        - regla
 *        - tiempo
 *        - observacion
 *        - estado
 *        
 *      example:
 *        codigo: 722222
 *        descripcion: La descripción necesario 
 *        estado: 1
 * 
 * 
 * 

 */


/**
 * @swagger
 * /api/asignacionsla:
 *  post:
 *    summary: Crea un nuevo asignacionsla
 *    tags: [asignacionsla]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_asignacionsla'
 *    responses:
 *      200:
 *        description: Nuevo asignacionsla fue creado
 */


/**
 * @swagger
 * /api/asignacionsla:
 *  get:
 *    summary: Retorna todo los asignacionslas 
 *    tags: [asignacionsla]
 *    
 *    responses:
 *      200:
 *        description: Da todos los asignacionsla
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_asignacionsla'
 */

/**
 * @swagger
 * /api/asignacionsla/{id_asignacionsla}:
 *  get:
 *    summary: Retorna un asignacionsla específico
 *    tags: [asignacionsla]
 *    parameters:
 *      - in: path
 *        name: id_asignacionsla
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del asignacionsla    
 *    responses:
 *      200:
 *        description: Da todos los asignacionsla
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_asignacionsla'
 *      404:
 *        description: asignacionsla no encontrado
 */


/**
 * @swagger
 * /api/asignacionsla/{id_asignacionsla}:
 *  delete:
 *    summary: Elimina un asignacionsla específico
 *    tags: [asignacionsla]
 *    parameters:
 *      - in: path
 *        name: id_asignacionsla
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del asignacionsla    
 *    responses:
 *      200:
 *        description: asignacionsla eliminado
 *      404:
 *        description: asignacionsla no encontrado
 */


/**
 * @swagger
 * /api/asignacionsla/{id_asignacionsla}:
 *  delete:
 *    summary: Elimina un asignacionsla específico
 *    tags: [asignacionsla]
 *    parameters:
 *      - in: path
 *        name: id_asignacionsla
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de asignacionsla    
 *    responses:
 *      200:
 *        description: asignacionsla eliminado
 *      404:
 *        description: asignacionsla no encontrado
 */


/**
 * @swagger
 * /api/asignacionsla/{id_asignacionsla}:
 *  put:
 *    summary: Actualiza asignacionsla específico
 *    tags: [asignacionsla]
 *    parameters:
 *      - in: path
 *        name: id_asignacionsla
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de asignacionsla   
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_asignacionsla' 
 *    responses:
 *      200:
 *        description: asignacionsla actualizado
 *      404:
 *        description: asignacionsla no encontrado
 */


export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllasignacionsla);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewasignacionsla = async (req, res) => {
  const { codigo } = req.body;
  let { actividad, tiempo,observacion,regla, estado, fecha_alta, fecha_baja, fecha_modi } = req.body;

  // validating
  if (codigo == null ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

 


  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("codigo", sql.VarChar, codigo)
      .input("actividad", sql.VarChar, actividad)
      .input("regla", sql.VarChar, regla)
      .input("tiempo", sql.Int, tiempo)
      .input("observacion", sql.Text, observacion)
      .input("estado", sql.Bit, estado)
      .input("fecha_alta", sql.Date, fecha_alta)
      .input("fecha_modi", sql.Date, fecha_modi)
      .input("fecha_baja", sql.Date, fecha_baja)
      .query(querys.addNewasignacionsla);

    res.json({ codigo, actividad,regla, tiempo,observacion, estado, fecha_alta, fecha_baja, fecha_modi });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getasignacionslaById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_asignacionsla", req.params.id_asignacionsla)
      .query(querys.getasignacionslaById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteasignacionslaById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_asignacionsla", req.params.id_asignacionsla)
      .query(querys.deleteasignacionsla);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalasignacionsla = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalasignacionsla);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updateasignacionslaById = async (req, res) => {
  const { actividad, codigo,regla, tiempo,observacion, estado, fecha_alta, fecha_baja, fecha_modi } = req.body;

  // validating
 
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("codigo", sql.VarChar, codigo)
      .input("actividad", sql.VarChar, actividad)
      .input("regla", sql.VarChar, regla)
      .input("tiempo", sql.Int, tiempo)
      .input("observacion", sql.Text, observacion)
      .input("estado", sql.Bit, estado)
      .input("fecha_alta", sql.Date, fecha_alta)
      .input("fecha_modi", sql.Date, fecha_modi)
      .input("fecha_baja", sql.Date, fecha_baja)
      .input("id_asignacionsla", req.params.id_asignacionsla)
      .query(querys.updateasignacionslaById);
    res.json({ actividad, codigo,regla, tiempo,observacion, estado, fecha_alta, fecha_baja, fecha_modi});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
