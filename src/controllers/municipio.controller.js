import { getConnection, querys, sql } from "../database";

/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    cat_municipio:
 *      type: object
 *      properties:
 *        codigo:
 *          type: string 
 *          description: El codigo de municipio
 *        descripcion:
 *          type: string
 *          description: Desribrir
 *        estado:
 *          type: boolean 
 *          description: El estado binario o booleano del municipio
 *        fecha_alta:
 *          type: date
 *          description: Fecha de alta del municipio 
 *        fecha_baja:
 *          type: date
 *          description: Fecha de baja del municipio
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
 * /api/municipio:
 *  post:
 *    summary: Crea una nueva municipio
 *    tags: [municipio]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_municipio'
 *    responses:
 *      200:
 *        description: Nuevo municipio fue creado
 */


/**
 * @swagger
 * /api/municipio:
 *  get:
 *    summary: Retorna todo las municipioes
 *    tags: [municipio]
 *    
 *    responses:
 *      200:
 *        description: Da todos los municipio
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_municipio'
 */

/**
 * @swagger
 * /api/municipio/{id_municipio}:
 *  get:
 *    summary: Retorna una municipio específico
 *    tags: [municipio]
 *    parameters:
 *      - in: path
 *        name: id_municipio
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de la municipio    
 *    responses:
 *      200:
 *        description: Da todas las municipio
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_municipio'
 *      404:
 *        description: municipio no encontrado
 */


/**
 * @swagger
 * /api/municipio/{id_municipio}:
 *  delete:
 *    summary: Elimina una municipio específico
 *    tags: [municipio]
 *    parameters:
 *      - in: path
 *        name: id_municipio
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del municipio    
 *    responses:
 *      200:
 *        description: municipio eliminado
 *      404:
 *        description: municipio no encontrado
 */


/**
 * @swagger
 * /api/municipio/{id_municipio}:
 *  delete:
 *    summary: Elimina una municipio específico
 *    tags: [municipio]
 *    parameters:
 *      - in: path
 *        name: id_municipio
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de municipio    
 *    responses:
 *      200:
 *        description: municipio eliminado
 *      404:
 *        description: municipio no encontrado
 */


/**
 * @swagger
 * /api/municipio/{id_municipio}:
 *  put:
 *    summary: Actualiza municipio específico
 *    tags: [municipio]
 *    parameters:
 *      - in: path
 *        name: id_municipio
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de municipio   
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_municipio' 
 *    responses:
 *      200:
 *        description: municipio actualizado
 *      404:
 *        description: municipio no encontrado
 */




export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllmunicipio);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewmunicipio = async (req, res) => {
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
      .query(querys.addNewmunicipio);

    res.json({ codigo, descripcion, estado, fecha_alta, fecha_baja, fecha_modi });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getmunicipioById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_municipio", req.params.id_municipio)
      .query(querys.getmunicipioById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deletemunicipioById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_municipio", req.params.id_municipio)
      .query(querys.deletemunicipio);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalmunicipio = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalmunicipio);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updatemunicipioById = async (req, res) => {
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
      .input("id_municipio", req.params.id_municipio)
      .query(querys.updatemunicipioById);
    res.json({ descripcion, codigo, estado, fecha_alta, fecha_baja, fecha_modi});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
