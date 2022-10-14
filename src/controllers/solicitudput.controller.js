import { getConnection, querys, sql } from "../database";


export const updatesolicitudByIdput = async (req, res) => {
  let { validacion } = req.body;

  // validating
 
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("validacion", sql.Text, validacion)
      .input("id_solicitud", sql.Int, req.params.id_solicitud)

      .query(querys.updatesolicitudByIdput);
    res.json({validacion});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
