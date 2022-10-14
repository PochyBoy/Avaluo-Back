import { getConnection, querys, sql } from "../database";


/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    cat_avaluador:
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
 *        representante_legal:
 *          type: string
 *          description: Escribir el representante legal
 *        domicilio_legal:
 *          type: string
 *          description: Escribir el domicilio real
 *        domicilio:
 *          type: string
 *          description: Escribir el domicilio
 *        municipio:
 *          type: string
 *          description: Escribir el municipio
 *        profesion:
 *          type: string
 *          description: Escribir la profesión
 *        especialidad_valuacion:
 *          type: string
 *          description: La especialidad de valuación
 *        tiempo_experiencia:
 *          type: number
 *          descriptiom: Escribir el tiempo de experiencia
 *        contrato:
 *          type: string
 *          description: Escribir el contrato
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
 *        capacidad_avaluos:
 *          type: string
 *        estado:
 *          type: boolean 
 *          description: Escribir el estado
 *        fecha_alta:
 *          type: date
 *          description: Fecha de alta del avaluador 
 *        fecha_baja:
 *          type: date
 *          description: Fecha de baja del avaluador
 *        fecha_modi:
 *          type: date
 *          description: Fecha de modificación del estado
 *      required:
 *        - fecha_inicio
 *        - fecha_final
 *        - nombre
 *        - representante_legal
 *        - domicilio_legal
 *        - domicilio
 *        - municipio
 *        - profesion
 *        - especialidad_valuacion
 *        - tiempo_experiencia
 *        - contrato
 *        - correo_electronico
 *        - telefono_oficina
 *        - telefono_celular
 *        - ci
 *        - nit
 *        - capacidad_avaluos
 *        - estado
 *        
 *      example:
 *        fecha_inicio: YYYY-MM-DD
 *        fecha_final: YYYY-MM-DD
 *        nombre: Paul
 *        representante_legal: Roberto
 *        domicilio_legal: Mz. M lote
 *        domicilio: Jr. La union
 *        municipio: Jesus Maria
 *        profesion: Programador
 *        especialidad_valuacion: Especialidad
 *        tiempo_experiencia: 25
 *        contrato: El contrato que se ba a realizar
 *        correo_electronico: paul@gmail.com
 *        telefono_oficina: 2222222
 *        telefono_celular: 1111111
 *        ci: 333333333
 *        nit: 444444444
 *        capacidad_avaluos: Que capasidad tendrá
 *        estado: 0
 * 
 *  
 */


/**
 * @swagger
 * /api/avaluador:
 *  post:
 *    summary: Crea un nuevo avaluador
 *    tags: [avaluador]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_avaluador'
 *    responses:
 *      200:
 *        description: Nuevo avaluador fue creado
 */


/**
 * @swagger
 * /api/avaluador:
 *  get:
 *    summary: Retorna todo los avaluadores
 *    tags: [avaluador]
 *    
 *    responses:
 *      200:
 *        description: Da todos los avaluador
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_avaluador'
 */

/**
 * @swagger
 * /api/avaluador/{id_avaluador}:
 *  get:
 *    summary: Retorna un avaluador específico
 *    tags: [avaluador]
 *    parameters:
 *      - in: path
 *        name: id_avaluador
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del avaluador    
 *    responses:
 *      200:
 *        description: Da todos los avaluador
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/cat_avaluador'
 *      404:
 *        description: avaluador no encontrado
 */


/**
 * @swagger
 * /api/avaluador/{id_avaluador}:
 *  delete:
 *    summary: Elimina un avaluador específico
 *    tags: [avaluador]
 *    parameters:
 *      - in: path
 *        name: id_avaluador
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del avaluador    
 *    responses:
 *      200:
 *        description: avaluador eliminado
 *      404:
 *        description: avaluador no encontrado
 */


/**
 * @swagger
 * /api/avaluador/{id_avaluador}:
 *  delete:
 *    summary: Elimina un avaluador específico
 *    tags: [avaluador]
 *    parameters:
 *      - in: path
 *        name: id_avaluador
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del avaluador    
 *    responses:
 *      200:
 *        description: avaluador eliminado
 *      404:
 *        description: avaluador no encontrado
 */


/**
 * @swagger
 * /api/avaluador/{id_avaluador}:
 *  put:
 *    summary: Actualiza avaluador específico
 *    tags: [avaluador]
 *    parameters:
 *      - in: path
 *        name: id_avaluador
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del avaluador   
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/cat_avaluador' 
 *    responses:
 *      200:
 *        description: avaluador actualizado
 *      404:
 *        description: avaluador no encontrado
 */




export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllavaluador);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewavaluador = async (req, res) => {

  let { fecha_inicio, fecha_fin,nombre, representante_legal, domicilio_legal, domicilio,
    municipio, profesion, especialidad_valuacion, tiempo_experiencia, contrato, correo_electronico,
    telefono_oficina, telefono_celular, ci, nit, capacidad_avaluos, estado,fecha_alta, fecha_baja, fecha_modi, tipo_de_persona
   } = req.body;

  // validating


 


  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("fecha_inicio", sql.Date, fecha_inicio)
      .input("fecha_fin", sql.Date, fecha_fin)
      .input("nombre", sql.VarChar, nombre)
      .input("representante_legal", sql.VarChar, representante_legal)
      .input("domicilio_legal", sql.VarChar, domicilio_legal)
      .input("domicilio", sql.VarChar, domicilio)
      .input("municipio", sql.VarChar, municipio)
      .input("profesion", sql.VarChar, profesion)
      .input("especialidad_valuacion", sql.VarChar, especialidad_valuacion)
      .input("tiempo_experiencia", sql.Int, tiempo_experiencia)
      .input("contrato", sql.Text, contrato)
      .input("correo_electronico", sql.VarChar, correo_electronico)
      .input("telefono_oficina", sql.VarChar, telefono_oficina)
      .input("telefono_celular", sql.VarChar, telefono_celular)
      .input("ci", sql.VarChar, ci)
      .input("nit", sql.VarChar, nit)
      .input("capacidad_avaluos", sql.Int, capacidad_avaluos)
      .input("estado", sql.Bit, estado)
      .input("fecha_alta", sql.Date, fecha_alta)
      .input("fecha_modi", sql.Date, fecha_modi)
      .input("fecha_baja", sql.Date, fecha_baja)
      .input("tipo_de_persona", sql.VarChar, tipo_de_persona )
      .query(querys.addNewavaluador);

    res.json({ fecha_inicio, fecha_fin,nombre, representante_legal, domicilio_legal, domicilio,
      municipio, profesion, especialidad_valuacion, tiempo_experiencia, contrato, correo_electronico,
      telefono_oficina, telefono_celular, ci, nit, capacidad_avaluos, estado,fecha_alta, fecha_baja, fecha_modi, tipo_de_persona });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getavaluadorById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_avaluador", req.params.id_avaluador)
      .query(querys.getavaluadorById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteavaluadorById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_avaluador", req.params.id_avaluador)
      .query(querys.deleteavaluador);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalavaluador = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalavaluador);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updateavaluadorById = async (req, res) => {
  const { fecha_inicio, fecha_fin,nombre, representante_legal, domicilio_legal, domicilio,
    municipio, profesion, especialidad_valuacion, tiempo_experiencia, contrato, correo_electronico,
    telefono_oficina, telefono_celular, ci, nit, capacidad_avaluos, estado,fecha_alta, fecha_baja, fecha_modi, tipo_de_persona} = req.body;

  // validating
 
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("fecha_inicio", sql.Date, fecha_inicio)
      .input("fecha_fin", sql.Date, fecha_fin)
      .input("nombre", sql.VarChar, nombre)
      .input("representante_legal", sql.VarChar, representante_legal)
      .input("domicilio_legal", sql.VarChar, domicilio_legal)
      .input("domicilio", sql.VarChar, domicilio)
      .input("municipio", sql.VarChar, municipio)
      .input("profesion", sql.VarChar, profesion)
      .input("especialidad_valuacion", sql.VarChar, especialidad_valuacion)
      .input("tiempo_experiencia", sql.Int, tiempo_experiencia)
      .input("contrato", sql.Text, contrato)
      .input("correo_electronico", sql.VarChar, correo_electronico)
      .input("telefono_oficina", sql.VarChar, telefono_oficina)
      .input("telefono_celular", sql.VarChar, telefono_celular)
      .input("ci", sql.VarChar, ci)
      .input("nit", sql.VarChar, nit)
      .input("capacidad_avaluos", sql.Int, capacidad_avaluos)
      .input("estado", sql.Bit, estado)
      .input("fecha_alta", sql.Date, fecha_alta)
      .input("fecha_modi", sql.Date, fecha_modi)
      .input("fecha_baja", sql.Date, fecha_baja)
      .input("tipo_de_persona", sql.VarChar, tipo_de_persona )
      .input("id_avaluador", sql.Int, req.params.id_avaluador)
      .query(querys.updateavaluadorById);
    res.json({ fecha_inicio, fecha_fin,nombre, representante_legal, domicilio_legal, domicilio,
      municipio, profesion, especialidad_valuacion, tiempo_experiencia, contrato, correo_electronico,
      telefono_oficina, telefono_celular, ci, nit, capacidad_avaluos, estado,fecha_alta, fecha_baja, fecha_modi, tipo_de_persona});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getfechanull = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getvaloracionFechaNull);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};