import { getConnection, querys, sql } from "../database";

/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    mov_convenios:
 *      type: object
 *      properties:
 *        municipio:
 *          type: string 
 *          description: El municipio de convenios
 *        perito:
 *          type: string
 *          description: Desribrir
 *        nombre_proyecto:
 *          type: string 
 *          description: El nombre_proyecto binario o booleano del convenios
 *        fecha_alta:
 *          type: date
 *          description: Fecha de alta del convenios 
 *        fecha_baja:
 *          type: date
 *          description: Fecha de baja del convenios
 *        fecha_modi:
 *          type: date
 *          description: Fecha de modificación del nombre_proyecto
 *      required:
 *        - municipio
 *        - descripción
 *        - nombre_proyecto
 *      example:
 *        municipio: Jesus Mario
 *        perito: El perito necesario
 *        nombre_proyecto: Estrellita del saber.
 * 
 * 

 */


/**
 * @swagger
 * /api/convenios:
 *  post:
 *    summary: Crea una nueva convenios
 *    tags: [convenios]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/mov_convenios'
 *    responses:
 *      200:
 *        description: Nuevo convenios fue creado
 */


/**
 * @swagger
 * /api/convenios:
 *  get:
 *    summary: Retorna todo las convenioses
 *    tags: [convenios]
 *    
 *    responses:
 *      200:
 *        description: Da todos los convenios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/mov_convenios'
 */

/**
 * @swagger
 * /api/convenios/{id_convenios}:
 *  get:
 *    summary: Retorna una convenios específico
 *    tags: [convenios]
 *    parameters:
 *      - in: path
 *        name: id_convenios
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de la convenios    
 *    responses:
 *      200:
 *        description: Da todas las convenios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/mov_convenios'
 *      404:
 *        description: convenios no encontrado
 */


/**
 * @swagger
 * /api/convenios/{id_convenios}:
 *  delete:
 *    summary: Elimina una convenios específico
 *    tags: [convenios]
 *    parameters:
 *      - in: path
 *        name: id_convenios
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del convenios    
 *    responses:
 *      200:
 *        description: convenios eliminado
 *      404:
 *        description: convenios no encontrado
 */


/**
 * @swagger
 * /api/convenios/{id_convenios}:
 *  delete:
 *    summary: Elimina una convenios específico
 *    tags: [convenios]
 *    parameters:
 *      - in: path
 *        name: id_convenios
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de convenios    
 *    responses:
 *      200:
 *        description: convenios eliminado
 *      404:
 *        description: convenios no encontrado
 */


/**
 * @swagger
 * /api/convenios/{id_convenios}:
 *  put:
 *    summary: Actualiza convenios específico
 *    tags: [convenios]
 *    parameters:
 *      - in: path
 *        name: id_convenios
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de convenios   
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/mov_convenios' 
 *    responses:
 *      200:
 *        description: convenios actualizado
 *      404:
 *        description: convenios no encontrado
 */




export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllconvenios);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewconvenios = async (req, res) => {

  let { municipio, perito ,nombre_proyecto, fecha_inicio, fecha_fin } = req.body;

  // validating
  

 
  

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("municipio", sql.VarChar, municipio)
      .input("perito", sql.VarChar, perito)
      .input("nombre_proyecto", sql.VarChar, nombre_proyecto)
      .input("fecha_inicio", sql.Date, fecha_inicio)
      .input("fecha_fin", sql.Date, fecha_fin)
      .query(querys.addNewconvenios);

    res.json({ municipio, perito ,nombre_proyecto, fecha_inicio, fecha_fin  });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getconveniosById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getconveniosById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteconveniosById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteconvenios);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalconvenios = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalconvenios);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updateconveniosById = async (req, res) => {
  const { municipio, perito ,nombre_proyecto, fecha_inicio, fecha_fin } = req.body;

  // validating
 
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("municipio", sql.VarChar, municipio)
      .input("perito", sql.VarChar, perito)
      .input("nombre_proyecto", sql.VarChar, nombre_proyecto)
      .input("fecha_inicio", sql.Date, fecha_inicio)
      .input("fecha_fin", sql.Date, fecha_fin)
      .input("id", req.params.id)
      .query(querys.updateconveniosById);
    res.json({ municipio, perito ,nombre_proyecto, fecha_inicio, fecha_fin });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
