import { getConnection, querys, sql } from "../database";

export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllvaloracion);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewvaloracion = async (req, res) => {

  let { fecha_visita, fecha_pago ,calificacion, comentario, conformidad, email } = req.body;


  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("fecha_visita", sql.Date, fecha_visita)
      .input("fecha_pago", sql.Date, fecha_pago)
      .input("calificacion", sql.Int, calificacion)
      .input("comentario", sql.Text, comentario)
      .input("email", sql.VarChar, email)
      .input("conformidad", sql.Bit, conformidad)
      .query(querys.addNewvaloracion);

    res.json({ fecha_visita, fecha_pago ,calificacion, comentario, conformidad, email });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getvaloracionById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_valoracion", req.params.id_valoracion)
      .query(querys.getvaloracionById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deletevaloracionById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_valoracion", req.params.id_valoracion)
      .query(querys.deletevaloracion);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalvaloracion = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalvaloracion);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updatevaloracionById = async (req, res) => {
  const { fecha_visita, fecha_pago ,calificacion, comentario, conformidad, email} = req.body;

  // validating
 
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("fecha_visita", sql.Date, fecha_visita)
      .input("fecha_pago", sql.Date, fecha_pago)
      .input("calificacion", sql.Int, calificacion)
      .input("comentario", sql.Text, comentario)
      .input("email", sql.VarChar, email)
      .input("conformidad", sql.Bit, conformidad)
      .input("id_valoracion", req.params.id_valoracion)
      .query(querys.updatevaloracionById);
    res.json({ fecha_visita, fecha_pago ,calificacion, comentario, conformidad, email});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getvaloracionByEmail = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("email", req.params.email)
      .query(querys.getvaloracionByIdEmail);
    return res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
