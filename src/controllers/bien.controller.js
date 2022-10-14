import { getConnection, querys, sql } from "../database";

/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    cat_bien:
 *      type: object
 *      properties:
 *        codigo:
 *          type: string 
 *          description: El codigo de bien
 *        descripcion:
 *          type: string
 *          description: Desribrir
 *        estado:
 *          type: boolean 
 *          description: El estado binario o booleano del bien
 *        fecha_alta:
 *          type: date
 *          description: Fecha de alta del bien 
 *        fecha_baja:
 *          type: date
 *          description: Fecha de baja del bien
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
 * /api/bien:
 *  post:
 *    summary: Crea una nueva bien
 *    tags: [bien]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_bien'
 *    responses:
 *      200:
 *        description: Nuevo bien fue creado
 */


/**
 * @swagger
 * /api/bien:
 *  get:
 *    summary: Retorna todo las bienes
 *    tags: [bien]
 *    
 *    responses:
 *      200:
 *        description: Da todos los bien
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_bien'
 */

/**
 * @swagger
 * /api/bien/{id_bien}:
 *  get:
 *    summary: Retorna una bien específico
 *    tags: [bien]
 *    parameters:
 *      - in: path
 *        name: id_bien
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de la bien    
 *    responses:
 *      200:
 *        description: Da todas las bien
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_bien'
 *      404:
 *        description: bien no encontrado
 */


/**
 * @swagger
 * /api/bien/{id_bien}:
 *  delete:
 *    summary: Elimina una bien específico
 *    tags: [bien]
 *    parameters:
 *      - in: path
 *        name: id_bien
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del bien    
 *    responses:
 *      200:
 *        description: bien eliminado
 *      404:
 *        description: bien no encontrado
 */


/**
 * @swagger
 * /api/bien/{id_bien}:
 *  delete:
 *    summary: Elimina una bien específico
 *    tags: [bien]
 *    parameters:
 *      - in: path
 *        name: id_bien
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de bien    
 *    responses:
 *      200:
 *        description: bien eliminado
 *      404:
 *        description: bien no encontrado
 */


/**
 * @swagger
 * /api/bien/{id_bien}:
 *  put:
 *    summary: Actualiza bien específico
 *    tags: [bien]
 *    parameters:
 *      - in: path
 *        name: id_bien
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de bien   
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_bien' 
 *    responses:
 *      200:
 *        description: bien actualizado
 *      404:
 *        description: bien no encontrado
 */




export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllbien);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewbien = async (req, res) => {
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
      .query(querys.addNewbien);

    res.json({ codigo, descripcion, estado, fecha_alta, fecha_baja, fecha_modi });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getbienById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_bien", req.params.id_bien)
      .query(querys.getbienById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deletebienById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_bien", req.params.id_bien)
      .query(querys.deletebien);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalbien = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalbien);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updatebienById = async (req, res) => {
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
      .input("id_bien", req.params.id_bien)
      .query(querys.updatebienById);
    res.json({ descripcion, codigo, estado, fecha_alta, fecha_baja, fecha_modi});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
