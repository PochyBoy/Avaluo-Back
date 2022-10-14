import config from "../config";
import jwt from "jsonwebtoken";
import { getConnection, sql, querys } from "../database";

export const verifyToken = async (req, res, next) => {
  try {
    let user;
    const token = req.headers["x-access-token"];
    console.log(token)
    if (!token) return res.status(403).json({ msg: "No Token Provided" });

    const decoded = jwt.verify(token, config.secretkey);
    req.id = decoded.data.id_usuario;
    req.rol = decoded.data.rol;
    console.log(decoded)

    user = await findUSer(req.id);
    if (!user) return res.status(404).json({ msg: "No user found" });
    next();
  } catch (error) {
    res.status(401).json({ msg: "Unauthorized" });
  }
};



export const isAdmin = async (req, res, next) => {
  
  
  if (req.rol == "Administrador") {
    next();
    return;
  }
  return res.status(403).json({ msg: "Required Administrador role" });
};

export const isConsultas = async (req, res, next) => {
  const user = await findUSer(req.id);
  if (user.rol == "Consultas") {
    next();
    return;
  }
  return res.status(403).json({ msg: "Required Consultas role" });
};

export const isExperto = async (req, res, next) => {
  const user = await findUSer(req.id_usuario);
  if (user.rol == "Experto en avalúos") {
    next();
    return;
  }
  return res.status(403).json({ msg: "Required Experto en avalúos role" });
};

export const isPerito = async (req, res, next) => {
  const user = await findUSer(req.id_usuario);
  if (user.rol == "Perito en avalúos") {
    next();
    return;
  }
  return res.status(403).json({ msg: "Required Perito en avalúos role" });
};

export const isSolicitante = async (req, res, next) => {
  const user = await findUSer(req.id_usuario);
  if (user.rol == "Solicitante") {
    next();
    return;
  }
  return res.status(403).json({ msg: "Required Solicitante role" });
};

export const isCliente = async (req, res, next) => {

  if (req.rol == "Cliente") {
    next();
    return;
  }
  return res.status(403).json({ msg: "Required Cliente role" });
};

const findUSer = async (id_usuario) => {
  const pool = await getConnection();
  const user = await pool
    .request()
    .input("id_usuario", sql.Int, id_usuario)
    .query(querys.getUserById);
    
    
  return user.recordset[0] ;
};

findUSer(43)