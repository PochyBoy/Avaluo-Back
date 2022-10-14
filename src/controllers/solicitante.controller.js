import { getConnection, querys, sql } from "../database";

/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    cat_solicitante:
 *      type: object
 *      properties:
 *        fecha_inicio:
 *          type: date 
 *          description: Fecha del inicio
 *        fecha_fin:
 *          type: date
 *          description: Fecha del final
 *        nombre:
 *          type: string
 *          description: Escrbir el nombre
 *        domicilio:
 *          type: string
 *          description: Escribir el domicilio
 *        municipio:
 *          type: string
 *          description: Escribir el municipio
 *        profesion:
 *          type: string
 *          description: Escribir la profesión
 *        correo_electronico:
 *          type: string
 *          description: Escribir el correo electrónico
 *        telefono_oficina:
 *          type: string
 *          description: Escribir el numero de la oficina
 *        telefono_celular:
 *          type: string
 *          description: Escribir el numero de celular
 *        ci:
 *          type: string
 *          description: Escribir el ci
 *        nit:
 *          type: string
 *          description: Escribir el nit
 *        estado:
 *          type: boolean 
 *          description: Escribir el estado
 *        fecha_alta:
 *          type: date
 *          description: Fecha de alta del solicitante 
 *        fecha_baja:
 *          type: date
 *          description: Fecha de baja del solicitante
 *        fecha_modi:
 *          type: date
 *          description: Fecha de modificación del estado
 *      required:
 *        - fecha_inicio
 *        - fecha_final
 *        - nombre
 *        - domicilio
 *        - municipio
 *        - profesion
 *        - contrato
 *        - correo_electronico
 *        - telefono_oficina
 *        - telefono_celular
 *        - ci
 *        - nit
 *        - estado
 *        
 *      example:
 *        fecha_inicio: YYYY-MM-DD
 *        fecha_final: YYYY-MM-DD
 *        nombre: Paul
 *        domicilio: Jr. La union
 *        municipio: Jesus Maria
 *        profesion: Programador
 *        contrato: El contrato que se ba a realizar
 *        correo_electronico: paul@gmail.com
 *        telefono_oficina: 2222222
 *        telefono_celular: 21111111
 *        ci: 333333333
 *        nit: 444444444
 *        estado: 0
 * 
 *  
 */


/**
 * @swagger
 * /api/solicitante:
 *  post:
 *    summary: Crea un nuevo solicitante
 *    tags: [solicitante]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_solicitante'
 *    responses:
 *      200:
 *        description: Nuevo solicitante fue creado
 */


/**
 * @swagger
 * /api/solicitante:
 *  get:
 *    summary: Retorna todo los solicitantees
 *    tags: [solicitante]
 *    
 *    responses:
 *      200:
 *        description: Da todos los solicitante
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_solicitante'
 */

/**
 * @swagger
 * /api/solicitante/{id_solicitante}:
 *  get:
 *    summary: Retorna un solicitante específico
 *    tags: [solicitante]
 *    parameters:
 *      - in: path
 *        name: id_solicitante
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del solicitante    
 *    responses:
 *      200:
 *        description: Da todos los solicitante
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_solicitante'
 *      404:
 *        description: solicitante no encontrado
 */


/**
 * @swagger
 * /api/solicitante/{id_solicitante}:
 *  delete:
 *    summary: Elimina un solicitante específico
 *    tags: [solicitante]
 *    parameters:
 *      - in: path
 *        name: id_solicitante
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del solicitante    
 *    responses:
 *      200:
 *        description: solicitante eliminado
 *      404:
 *        description: solicitante no encontrado
 */


/**
 * @swagger
 * /api/solicitante/{id_solicitante}:
 *  delete:
 *    summary: Elimina un solicitante específico
 *    tags: [solicitante]
 *    parameters:
 *      - in: path
 *        name: id_solicitante
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del solicitante    
 *    responses:
 *      200:
 *        description: solicitante eliminado
 *      404:
 *        description: solicitante no encontrado
 */


/**
 * @swagger
 * /api/solicitante/{id_solicitante}:
 *  put:
 *    summary: Actualiza solicitante específico
 *    tags: [solicitante]
 *    parameters:
 *      - in: path
 *        name: id_solicitante
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del solicitante   
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_solicitante' 
 *    responses:
 *      200:
 *        description: solicitante actualizado
 *      404:
 *        description: solicitante no encontrado
 */



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
    const result = await pool.request().query(querys.getAllsolicitante);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewsolicitante = async (req, res) => {
 
  let { fecha_inicio, fecha_fin,nombre, domicilio,
    municipio, profesion, correo_electronico,telefono_oficina, telefono_celular, ci, nit,
    estado,fecha_alta, fecha_baja, fecha_modi } = req.body;

  // validating

 
 

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("fecha_inicio", sql.Date, fecha_inicio)
      .input("fecha_fin", sql.Date, fecha_fin)
      .input("nombre", sql.VarChar, nombre)
      .input("domicilio", sql.VarChar, domicilio)
      .input("municipio", sql.VarChar, municipio)
      .input("profesion", sql.VarChar, profesion)
      .input("correo_electronico", sql.VarChar, correo_electronico)
      .input("telefono_oficina", sql.VarChar, telefono_oficina)
      .input("telefono_celular", sql.VarChar, telefono_celular)
      .input("ci", sql.VarChar, ci)
      .input("nit", sql.VarChar, nit)
      .input("estado", sql.Bit, estado)
      .input("fecha_alta", sql.Date, fecha_alta)
      .input("fecha_modi", sql.Date, fecha_modi)
      .input("fecha_baja", sql.Date, fecha_baja)
      .query(querys.addNewsolicitante);

    res.json({ fecha_inicio, fecha_fin,nombre, domicilio,
      municipio, profesion, correo_electronico,telefono_oficina, telefono_celular, ci, nit,
      estado,fecha_alta, fecha_baja, fecha_modi});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getsolicitanteById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_solicitante", req.params.id_solicitante)
      .query(querys.getsolicitanteById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deletesolicitanteById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_solicitante", req.params.id_solicitante)
      .query(querys.deletesolicitante);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalsolicitante = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalsolicitante);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updatesolicitanteById = async (req, res) => {
  let { fecha_inicio, fecha_fin,nombre, domicilio,
    municipio, profesion, correo_electronico,telefono_oficina, telefono_celular, ci, nit,
    estado,fecha_alta, fecha_baja, fecha_modi} = req.body;

  // validating
 
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("fecha_inicio", sql.Date, fecha_inicio)
      .input("fecha_fin", sql.Date, fecha_fin)
      .input("nombre", sql.VarChar, nombre)
      .input("domicilio", sql.VarChar, domicilio)
      .input("municipio", sql.VarChar, municipio)
      .input("profesion", sql.VarChar, profesion)
      .input("correo_electronico", sql.VarChar, correo_electronico)
      .input("telefono_oficina", sql.VarChar, telefono_oficina)
      .input("telefono_celular", sql.VarChar, telefono_celular)
      .input("ci", sql.VarChar, ci)
      .input("nit", sql.VarChar, nit)
      .input("estado", sql.Bit, estado)
      .input("fecha_alta", sql.Date, fecha_alta)
      .input("fecha_modi", sql.Date, fecha_modi)
      .input("fecha_baja", sql.Date, fecha_baja)
      .input("id_solicitante", sql.Int, req.params.id_solicitante)

      .query(querys.updatesolicitanteById);
    res.json({fecha_inicio, fecha_fin,nombre, domicilio,
      municipio, profesion, correo_electronico,telefono_oficina, telefono_celular, ci, nit,
      estado,fecha_alta, fecha_baja, fecha_modi});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
