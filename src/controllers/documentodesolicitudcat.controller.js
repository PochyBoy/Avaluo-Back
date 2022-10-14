import { getConnection, querys, sql } from "../database";


export const getUsuario = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getAllCatdocumentodesolicitud);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
    //console.log('holiboli')
   // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
  };
  
  export const createNewCatdocumentodesolicitud = async (req, res) => {
   
    let { descripcion,obligatorio ,estado } = req.body;
  
    // validating
  
  
   
    
  
    try {
      const pool = await getConnection();
  
      await pool
        .request()
        .input("descripcion", sql.VarChar, descripcion)
        .input("obligatorio", sql.Bit, obligatorio)
        .input("estado", sql.Bit, estado)
        .query(querys.addNewCatdocumentodesolicitud);
  
      res.json({ descripcion,obligatorio ,estado });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const getCatdocumentodesolicitudById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id_documentodesolicitud", req.params.id_documentodesolicitud)
        .query(querys.getCatdocumentodesolicitudById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const deleteCatdocumentodesolicitudById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id_documentodesolicitud", req.params.id_documentodesolicitud)
        .query(querys.deleteCatdocumentodesolicitud);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const getTotalCatdocumentodesolicitud = async (req, res) => {
    /*const pool = await getConnection();
  
    const result = await pool.request().query(querys.getTotalCatdocumentodesolicitud);
    console.log(result);
    res.json(result.recordset[0][""]);
  */};
  
  export const updateCatdocumentodesolicitudById = async (req, res) => {
    const { descripcion,obligatorio ,estado } = req.body;
  
    // validating
   
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("descripcion", sql.VarChar, descripcion)
        .input("obligatorio", sql.Bit, obligatorio)
        .input("estado", sql.VarChar, estado)
        .input("codigodesolicitud", sql.Date, codigodesolicitud)
        .input("id_documentodesolicitud", req.params.id_documentodesolicitud)
        .query(querys.updateCatdocumentodesolicitudById);
      res.json({ descripcion,obligatorio ,nombre, codigodesolicitud});
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  