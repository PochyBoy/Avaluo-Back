import { getConnection, querys, sql } from "../database";



  export const updateubicaciondesolicitudById = async (req, res) => {
    const {validar} = req.body;
  
    // validating
   
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("validar", sql.Bit, validar)
        .input("numerodesolicitante", req.params.numerodesolicitante)
        .query(querys.updateubicaciondesolicitudByIdPut);
      res.json({ validar});
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };