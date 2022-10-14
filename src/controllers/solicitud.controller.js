import { getConnection, querys, sql } from "../database";

/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    mov_solicitud:
 *      type: object
 *      properties:
 *        numero_solicitud:
 *          type: string 
 *          description: Numero de solicitud
 *        solicitante:
 *          type: date
 *          description: Nombre de solicitante 
 *        fecha_solicitud:
 *          type: date
 *          description: Escrbir el nombre
 *        hora_solicitiud:
 *          type: time
 *          description: hola re la solicitud
 *        tipo_banca:
 *          type: string
 *          description: El tipo de banca
 *        tipo_bien:
 *          type: string
 *          description: El tipo de bien
 *        persona_referencia:
 *          type: string
 *          description: Persona referida
 *        agencia:
 *          type: string
 *          description: Escribir la agencia
 *        municipio:
 *          type: string
 *          description: El municipio donde procede
 *        cod_cliente:
 *          type: string
 *          description: El codigo del cliente
 *        nombre_cliente:
 *          type: string
 *          descriptiom: Nombre del cliente
 *        telefono_celular:
 *          type: string
 *          description: Telefono celular del cliente
 *        correo_electronico:
 *          type: string
 *          description: Escribir el correo electrónico
 *        tipo_requerimiento:
 *          type: string
 *          description: Escribir el tipo de requerimiento
 *        convenio:
 *          type: string
 *          description: Escribir el convenio
 *        tipo_asignacion:
 *          type: string
 *          description: Escribir el tipo de asignación
 *        perito_asignacion:
 *          type: string
 *          description: Escribir el perito asignado
 *      required:
 *        - numero_solicitud
 *        - solicitante
 *        - fecha_solicitud
 *        - hora_solicitud
 *        - tipo_banca
 *        - tipo_bien
 *        - persona_referencia
 *        - agencia
 *        - municipio
 *        - cod_cliente
 *        - nombre_cliente
 *        - telefono_celular
 *        - correo_electronico
 *        - tipo_requerimiento
 *        - convenio
 *        - tipo_asignacion
 *        - perito_asignado
 *        
 *      example:
 *        numero_solicitud: 1565765
 *        solicitante: Juanito
 *        fecha_solicitud: YYYY-MM-DD
 *        hora_solicitud: 4:00
 *        tipo_banca: Tipo de banca
 *        tipo_bien: Tipo de bien
 *        persona_referencia: Roberto
 *        agencia: Agencia
 *        municipio: San Luis
 *        cod_cliente: 25
 *        nombre_cliente: Rodrigez
 *        telefono_celular: 123456789
 *        correo_electronico: paul@gmail.com
 *        tipo_requerimiento: Tipo de requerimiento.
 *        capacidad_avaluos: Que capasidad tendrá
 *        estado: 0
 * 
 *  
 */


/**
 * @swagger
 * /api/solicitud:
 *  post:
 *    summary: Crea un nuevo solicitud
 *    tags: [solicitud]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/mov_solicitud'
 *    responses:
 *      200:
 *        description: Nuevo solicitud fue creado
 */


/**
 * @swagger
 * /api/solicitud:
 *  get:
 *    summary: Retorna todo los solicitudes
 *    tags: [solicitud]
 *    
 *    responses:
 *      200:
 *        description: Da todos los solicitud
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/mov_solicitud'
 */

/**
 * @swagger
 * /api/solicitud/{id_solicitud}:
 *  get:
 *    summary: Retorna un solicitud específico
 *    tags: [solicitud]
 *    parameters:
 *      - in: path
 *        name: id_solicitud
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del solicitud    
 *    responses:
 *      200:
 *        description: Da todos los solicitud
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/mov_solicitud'
 *      404:
 *        description: solicitud no encontrado
 */


/**
 * @swagger
 * /api/solicitud/{id_solicitud}:
 *  delete:
 *    summary: Elimina un solicitud específico
 *    tags: [solicitud]
 *    parameters:
 *      - in: path
 *        name: id_solicitud
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del solicitud    
 *    responses:
 *      200:
 *        description: solicitud eliminado
 *      404:
 *        description: solicitud no encontrado
 */


/**
 * @swagger
 * /api/solicitud/{id_solicitud}:
 *  delete:
 *    summary: Elimina un solicitud específico
 *    tags: [solicitud]
 *    parameters:
 *      - in: path
 *        name: id_solicitud
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del solicitud    
 *    responses:
 *      200:
 *        description: solicitud eliminado
 *      404:
 *        description: solicitud no encontrado
 */


/**
 * @swagger
 * /api/solicitud/{id_solicitud}:
 *  put:
 *    summary: Actualiza solicitud específico
 *    tags: [solicitud]
 *    parameters:
 *      - in: path
 *        name: id_solicitud
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del solicitud   
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/mov_solicitud' 
 *    responses:
 *      200:
 *        description: solicitud actualizado
 *      404:
 *        description: solicitud no encontrado
 */




export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllsolicitud);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewsolicitud = async (req, res) => {
  let { numero_solicitud, solicitante, fecha_solicitud, hora_solicitud ,tipo_banca, tipo_bien, persona_referencia,
  agencia, municipio, cod_cliente, nombre_cliente, telefono_celular, correo_electronico, tipo_requerimiento,
convenio, tipo_asignacion, perito_asignado } = req.body;

  // validating

 

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("numero_solicitud", sql.VarChar, numero_solicitud)
      .input("solicitante", sql.VarChar, solicitante)
      .input("fecha_solicitud", sql.Date, fecha_solicitud)
      .input("hora_solicitud", sql.Time, hora_solicitud)
      .input("tipo_banca", sql.VarChar, tipo_banca)
      .input("tipo_bien", sql.VarChar, tipo_bien)
      .input("persona_referencia", sql.VarChar, persona_referencia)
      .input("agencia", sql.VarChar, agencia)
      .input("municipio", sql.VarChar, municipio)
      .input("cod_cliente", sql.VarChar, cod_cliente)
      .input("nombre_cliente", sql.VarChar, nombre_cliente)
      .input("correo_electronico", sql.VarChar, correo_electronico)
      .input("telefono_celular", sql.VarChar, telefono_celular)
      .input("tipo_requerimiento", sql.VarChar, tipo_requerimiento)
      .input("convenio", sql.VarChar, convenio)
      .input("tipo_asignacion", sql.VarChar, tipo_asignacion)
      .input("perito_asignado", sql.VarChar, perito_asignado)
      


      



      .query(querys.addNewsolicitud);

    res.json({numero_solicitud, solicitante, fecha_solicitud, hora_solicitud ,tipo_banca, tipo_bien, persona_referencia,
      agencia, municipio, cod_cliente, nombre_cliente, telefono_celular, correo_electronico, tipo_requerimiento,
    convenio, tipo_asignacion, perito_asignado });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getsolicitudById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_solicitud", req.params.id_solicitud)
      .query(querys.getsolicitudById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deletesolicitudById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_solicitud", req.params.id_solicitud)
      .query(querys.deletesolicitud);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalsolicitud = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalsolicitud);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updatesolicitudById = async (req, res) => {
  const { numero_solicitud, solicitante, fecha_solicitud, hora_solicitud ,tipo_banca, tipo_bien, persona_referencia,
    agencia, municipio, cod_cliente, nombre_cliente, telefono_celular, correo_electronico, tipo_requerimiento,
  convenio, tipo_asignacion, perito_asignado} = req.body;

  // validating
 
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("numero_solicitud", sql.VarChar, numero_solicitud)
      .input("solicitante", sql.VarChar, solicitante)
      .input("fecha_solicitud", sql.Date, fecha_solicitud)
      .input("hora_solicitud", sql.Time, hora_solicitud)
      .input("tipo_banca", sql.VarChar, tipo_banca)
      .input("tipo_bien", sql.VarChar, tipo_bien)
      .input("persona_referencia", sql.VarChar, persona_referencia)
      .input("agencia", sql.VarChar, agencia)
      .input("cod_cliente", sql.VarChar, cod_cliente)
      .input("municipio", sql.VarChar, municipio)
      .input("nombre_cliente", sql.VarChar, nombre_cliente)
      .input("correo_electronico", sql.VarChar, correo_electronico)
      .input("telefono_celular", sql.VarChar, telefono_celular)
      .input("tipo_requerimiento", sql.VarChar, tipo_requerimiento)
      .input("convenio", sql.VarChar, convenio)
      .input("tipo_asignacion", sql.VarChar, tipo_asignacion)
      .input("perito_asignado", sql.VarChar, perito_asignado)
      .input("id_solicitud", sql.Int, req.params.id_solicitud)
      .query(querys.updatesolicitudById);
    res.json({numero_solicitud, solicitante, fecha_solicitud, hora_solicitud ,tipo_banca, tipo_bien, persona_referencia,
      agencia, municipio, cod_cliente, nombre_cliente, telefono_celular, correo_electronico, tipo_requerimiento,
    convenio, tipo_asignacion, perito_asignado});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updatesolicitudByIdCliente = async (req, res) => {
  const {fecha_visita, fecha_pago, calificacion, comentario, conformidad} = req.body;

  // validating
 
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("fecha_visita", sql.Date, fecha_visita)
      .input("fecha_pago", sql.Date, fecha_pago)
      .input("calificacion", sql.Int, calificacion)
      .input("comentario", sql.VarChar, comentario)
      .input("conformidad", sql.VarChar, conformidad)
      .input("id_solicitud", sql.Int, req.params.id_solicitud)
      .query(querys.updatesolicitudByIdCliente);
    res.json({fecha_visita, fecha_pago, calificacion, comentario, conformidad});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

      