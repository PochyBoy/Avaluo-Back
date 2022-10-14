
import { getConnection, querys, sql } from "../database";

export const getsolicitudByIdemail = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("correo_electronico", req.params.correo_electronico)
      .query(querys.getsolicitudByIdemail);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

