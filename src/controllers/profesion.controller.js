import { getConnection, querys, sql } from "../database";

/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    cat_profesion:
 *      type: object
 *      properties:
 *        codigo:
 *          type: string 
 *          description: El codigo de profesion
 *        descripcion:
 *          type: string
 *          description: Desribrir
 *        estado:
 *          type: boolean 
 *          description: El estado binario o booleano del profesion
 *        fecha_alta:
 *          type: date
 *          description: Fecha de alta del profesion 
 *        fecha_baja:
 *          type: date
 *          description: Fecha de baja del profesion
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
 * /api/profesion:
 *  post:
 *    summary: Crea una nueva profesion
 *    tags: [profesion]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_profesion'
 *    responses:
 *      200:
 *        description: Nuevo profesion fue creado
 */


/**
 * @swagger
 * /api/profesion:
 *  get:
 *    summary: Retorna todo las profesiones
 *    tags: [profesion]
 *    
 *    responses:
 *      200:
 *        description: Da todos los profesion
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_profesion'
 */

/**
 * @swagger
 * /api/profesion/{id_profesion}:
 *  get:
 *    summary: Retorna una profesion específico
 *    tags: [profesion]
 *    parameters:
 *      - in: path
 *        name: id_profesion
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de la profesion    
 *    responses:
 *      200:
 *        description: Da todas las profesion
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_profesion'
 *      404:
 *        description: profesion no encontrado
 */


/**
 * @swagger
 * /api/profesion/{id_profesion}:
 *  delete:
 *    summary: Elimina una profesion específico
 *    tags: [profesion]
 *    parameters:
 *      - in: path
 *        name: id_profesion
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del profesion    
 *    responses:
 *      200:
 *        description: profesion eliminado
 *      404:
 *        description: profesion no encontrado
 */


/**
 * @swagger
 * /api/profesion/{id_profesion}:
 *  delete:
 *    summary: Elimina una profesion específico
 *    tags: [profesion]
 *    parameters:
 *      - in: path
 *        name: id_profesion
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de profesion    
 *    responses:
 *      200:
 *        description: profesion eliminado
 *      404:
 *        description: profesion no encontrado
 */


/**
 * @swagger
 * /api/profesion/{id_profesion}:
 *  put:
 *    summary: Actualiza profesion específico
 *    tags: [profesion]
 *    parameters:
 *      - in: path
 *        name: id_profesion
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de profesion   
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_profesion' 
 *    responses:
 *      200:
 *        description: profesion actualizado
 *      404:
 *        description: profesion no encontrado
 */



export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllprofesion);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewprofesion = async (req, res) => {
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
      .query(querys.addNewprofesion);

    res.json({ codigo, descripcion, estado, fecha_alta, fecha_baja, fecha_modi });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getprofesionById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_profesion", req.params.id_profesion)
      .query(querys.getprofesionById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteprofesionById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_profesion", req.params.id_profesion)
      .query(querys.deleteprofesion);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalprofesion = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalprofesion);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updateprofesionById = async (req, res) => {
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
      .input("id_profesion", req.params.id_profesion)
      .query(querys.updateprofesionById);
    res.json({ descripcion, codigo, estado, fecha_alta, fecha_baja, fecha_modi});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
