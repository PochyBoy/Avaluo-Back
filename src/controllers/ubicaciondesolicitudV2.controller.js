import { getConnection, querys, sql } from "../database";


export const getUsuario = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getAllubicaciondesolicitudv2);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
    //console.log('holiboli')
   // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
  };
  
  
  
  export const getubicaciondesolicitudByIdv2 = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("numerodesolicitante", req.params.numerodesolicitante)
        .query(querys.getubicaciondesolicitudByIdv2);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  
  export const updateubicaciondesolicitudByIdv2 = async (req, res) => {
    const { responsable, nombre, email, direccion, coordenadasX, coordenadasY, puntoX, puntoY  } = req.body;
  
    // validating
   
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("responsable", sql.Text, responsable)
        .input("nombre", sql.Bit, nombre)
        .input("email", sql.VarChar, email)
        .input("direccion", sql.VarChar, direccion)
        .input("coordenadasX", sql.VarChar, coordenadasX)
        .input("coordenadasY", sql.VarChar, coordenadasY)
        .input("puntoX", sql.VarChar, puntoX)
        .input("puntoY", sql.VarChar, puntoY)
        .input("numerodesolicitante", req.params.numerodesolicitante)
        
        .query(querys.updateubicaciondesolicitudByIdv2);
      res.json({  responsable, nombre, email, direccion, coordenadasX, coordenadasY, puntoX, puntoY });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const deleteubicaciondesolicitudByIdv2 = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("numerodesolicitante", req.params.numerodesolicitante)
        .query(querys.deleteubicaciondesolicitudv2);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createNewubicaciondesolicitud = async (req, res) => {
    const { numerodesolicitante } = req.body;
    let { responsable, nombre, email, direccion, coordenadasX, coordenadasY, puntoX, puntoY } = req.body;
  
    // validating
    if (numerodesolicitante == null ) {
      return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
  
   
  
  
    try {
      const pool = await getConnection();
  
      await pool
        .request()
        .input("numerodesolicitante", sql.VarChar, numerodesolicitante)
        .input("responsable", sql.Text, responsable)
        .input("nombre", sql.Bit, nombre)
        .input("email", sql.VarChar, email)
        .input("direccion", sql.VarChar, direccion)
        .input("coordenadasX", sql.VarChar, coordenadasX)
        .input("coordenadasY", sql.VarChar, coordenadasY)
        .input("puntoX", sql.VarChar, puntoX)
        .input("puntoY", sql.VarChar, puntoY)
        .query(querys.addNewubicaciondesolicitud);
  
      res.json({ numerodesolicitante, responsable, nombre, email, direccion, coordenadasX, coordenadasY, puntoX, puntoY });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };