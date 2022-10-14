import { getConnection, querys, sql } from "../database";

/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    cat_tipodebien:
 *      type: object
 *      properties:
 *        codigo:
 *          type: string 
 *          description: El codigo de tipodebien
 *        descripcion:
 *          type: string
 *          description: Desribrir
 *        estado:
 *          type: boolean 
 *          description: El estado binario o booleano del tipodebien
 *        fecha_alta:
 *          type: date
 *          description: Fecha de alta del tipodebien 
 *        fecha_baja:
 *          type: date
 *          description: Fecha de baja del tipodebien
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
 * /api/tipodebien:
 *  post:
 *    summary: Crea una nueva tipodebien
 *    tags: [tipodebien]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_tipodebien'
 *    responses:
 *      200:
 *        description: Nuevo tipodebien fue creado
 */


/**
 * @swagger
 * /api/tipodebien:
 *  get:
 *    summary: Retorna todo las tipodebienes
 *    tags: [tipodebien]
 *    
 *    responses:
 *      200:
 *        description: Da todos los tipodebien
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_tipodebien'
 */

/**
 * @swagger
 * /api/tipodebien/{id_tipodebien}:
 *  get:
 *    summary: Retorna una tipodebien específico
 *    tags: [tipodebien]
 *    parameters:
 *      - in: path
 *        name: id_tipodebien
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de la tipodebien    
 *    responses:
 *      200:
 *        description: Da todas las tipodebien
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_tipodebien'
 *      404:
 *        description: tipodebien no encontrado
 */


/**
 * @swagger
 * /api/tipodebien/{id_tipodebien}:
 *  delete:
 *    summary: Elimina una tipodebien específico
 *    tags: [tipodebien]
 *    parameters:
 *      - in: path
 *        name: id_tipodebien
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del tipodebien    
 *    responses:
 *      200:
 *        description: tipodebien eliminado
 *      404:
 *        description: tipodebien no encontrado
 */


/**
 * @swagger
 * /api/tipodebien/{id_tipodebien}:
 *  delete:
 *    summary: Elimina una tipodebien específico
 *    tags: [tipodebien]
 *    parameters:
 *      - in: path
 *        name: id_tipodebien
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de tipodebien    
 *    responses:
 *      200:
 *        description: tipodebien eliminado
 *      404:
 *        description: tipodebien no encontrado
 */


/**
 * @swagger
 * /api/tipodebien/{id_tipodebien}:
 *  put:
 *    summary: Actualiza tipodebien específico
 *    tags: [tipodebien]
 *    parameters:
 *      - in: path
 *        name: id_tipodebien
 *        schema:
 *          type: number
 *        required: true
 *        description: El id de tipodebien   
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_tipodebien' 
 *    responses:
 *      200:
 *        description: tipodebien actualizado
 *      404:
 *        description: tipodebien no encontrado
 */



export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAlltipodebien);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewtipodebien = async (req, res) => {
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
      .query(querys.addNewtipodebien);

    res.json({ codigo, descripcion, estado, fecha_alta, fecha_baja, fecha_modi });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const gettipodebienById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_tipodebien", req.params.id_tipodebien)
      .query(querys.gettipodebienById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deletetipodebienById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_tipodebien", req.params.id_tipodebien)
      .query(querys.deletetipodebien);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotaltipodebien = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotaltipodebien);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updatetipodebienById = async (req, res) => {
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
      .input("id_tipodebien", req.params.id_tipodebien)
      .query(querys.updatetipodebienById);
    res.json({ descripcion, codigo, estado, fecha_alta, fecha_baja, fecha_modi});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
