import { getConnection, querys, sql } from "../database";


export const getUsuario = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getAllMovdocumentodesolicitud);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
    //console.log('holiboli')
   // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
  };
  
  export const createNewMovdocumentodesolicitud = async (req, res) => {
   
    let { descripcion,obligatorio , documento1, documento2, documento3, documento4, documento5, documento6, documento7, codigodesolicitud } = req.body;
  
    // validating
  
  
   
    
  
    try {
      const pool = await getConnection();
  
      await pool
        .request()
        .input("descripcion", sql.VarChar, descripcion)
        .input("obligatorio", sql.Bit, obligatorio)
        .input("documento1", sql.VarChar, documento1)
        .input("documento2", sql.VarChar, documento2)
        .input("documento3", sql.VarChar, documento3)
        .input("documento4", sql.VarChar, documento4)
        .input("documento5", sql.VarChar, documento5)
        .input("documento6", sql.VarChar, documento6)
        .input("documento7", sql.VarChar, documento7)
        .input("codigodesolicitud", sql.VarChar, codigodesolicitud)
        .query(querys.addNewMovdocumentodesolicitud);
  
      res.json({ descripcion,obligatorio , documento1, documento2, documento3, documento4, documento5, documento6, documento7, codigodesolicitud  });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const getMovdocumentodesolicitudById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id_documentodesolicitud", req.params.id_documentodesolicitud)
        .query(querys.getMovdocumentodesolicitudById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const deleteMovdocumentodesolicitudById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id_documentodesolicitud", req.params.id_documentodesolicitud)
        .query(querys.deleteMovdocumentodesolicitud);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const getTotalMovdocumentodesolicitud = async (req, res) => {
    /*const pool = await getConnection();
  
    const result = await pool.request().query(querys.getTotalMovdocumentodesolicitud);
    console.log(result);
    res.json(result.recordset[0][""]);
  */};
  
  export const updateMovdocumentodesolicitudById = async (req, res) => {
    const { descripcion,obligatorio , documento1, documento2, documento3, documento4, documento5, documento6, documento7, codigodesolicitud  } = req.body;
  
    // validating
   
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("descripcion", sql.VarChar, descripcion)
        .input("obligatorio", sql.Bit, obligatorio)
        .input("obligatorio", sql.Bit, obligatorio)
        .input("documento1", sql.VarChar, documento1)
        .input("documento2", sql.VarChar, documento2)
        .input("documento3", sql.VarChar, documento3)
        .input("documento4", sql.VarChar, documento4)
        .input("documento5", sql.VarChar, documento5)
        .input("documento6", sql.VarChar, documento6)
        .input("documento7", sql.VarChar, documento7)
        .input("codigodesolicitud", sql.VarChar, codigodesolicitud)
        .input("id_documentodesolicitud", req.params.id_documentodesolicitud)
        .query(querys.updateMovdocumentodesolicitudById);
      res.json({ descripcion,obligatorio , documento1, documento2, documento3, documento4, documento5, documento6, documento7, codigodesolicitud });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  