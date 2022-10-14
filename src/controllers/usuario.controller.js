import { getConnection, querys, sql } from "../database";
import { enviar_mail } from "../nodemailer/nodemailer";
import { comparePassword, encryptPassword } from "../middlewares/index";
import config from "../config";
import jwt from "jsonwebtoken";



const bcrypt = require('bcrypt')


/**
 * 
 * @swagger
 * components:
 *  schemas:
 *    aut_usuario:
 *      type: object
 *      properties:
 *        codigo:
 *          type: string 
 *          description: El codigo de usuario
 *        nombre:
 *          type: string
 *          description: El nombre del usuario
 *        email:
 *          type: string
 *          description: El email del usuario
 *        rol:
 *          type: string
 *          description: El rol del usuario
 *        estado:
 *          type: boolean 
 *          description: El estado binario o booleano del usuario
 *        fecha_alta:
 *          type: date
 *          description: Fecha de alta del usuario 
 *        fecha_baja:
 *          type: date
 *          description: Fecha de baja del usuario
 *        fecha_modi:
 *          type: date
 *          description: Fecha de modificación del estado
 *      required:
 *        - codigo
 *        - nombre
 *        - email
 *        - rol
 *        - estado
 *      example:
 *        codigo: 722222
 *        nombre: Paul 
 *        email: paul@gmail.com
 *        rol: administrador
 *        estado: 1

 */


/**
 * @swagger
 * /api/usuario:
 *  post:
 *    summary: Crea un nuevo usuario
 *    tags: [Usuario]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/aut_usuario'
 *    responses:
 *      200:
 *        description: Nuevo usuario fue creado
 */


/**
 * @swagger
 * /api/usuario:
 *  get:
 *    summary: Retorna todo los usuarios 
 *    tags: [Usuario]
 *    
 *    responses:
 *      200:
 *        description: Da todos los usuario
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/aut_usuario'
 */

/**
 * @swagger
 * /api/usuario/{id_usuario}:
 *  get:
 *    summary: Retorna un usuario específico
 *    tags: [Usuario]
 *    parameters:
 *      - in: path
 *        name: id_usuario
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del usuario    
 *    responses:
 *      200:
 *        description: Da todos los usuario
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              item:
 *                $ref: '#/components/schemas/aut_usuario'
 *      404:
 *        description: Usuario no encontrado
 */


/**
 * @swagger
 * /api/usuario/{id_usuario}:
 *  delete:
 *    summary: Elimina un usuario específico
 *    tags: [Usuario]
 *    parameters:
 *      - in: path
 *        name: id_usuario
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del usuario    
 *    responses:
 *      200:
 *        description: Usuario eliminado
 *      404:
 *        description: Usuario no encontrado
 */


/**
 * @swagger
 * /api/usuario/{id_usuario}:
 *  delete:
 *    summary: Elimina un usuario específico
 *    tags: [Usuario]
 *    parameters:
 *      - in: path
 *        name: id_usuario
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del usuario    
 *    responses:
 *      200:
 *        description: Usuario eliminado
 *      404:
 *        description: Usuario no encontrado
 */


/**
 * @swagger
 * /api/usuario/{id_usuario}:
 *  put:
 *    summary: Actualiza usuario específico
 *    tags: [Usuario]
 *    parameters:
 *      - in: path
 *        name: id_usuario
 *        schema:
 *          type: number
 *        required: true
 *        description: El id del usuario   
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/aut_usuario' 
 *    responses:
 *      200:
 *        description: Usuario actualizado
 *      404:
 *        description: Usuario no encontrado
 */




function generarString  (longitud)  {
  let result = "";
  const abc = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" "); // Espacios para convertir cara letra a un elemento de un array
  for(let i=0;i<=longitud;i++) {
    const random = Math.floor(Math.random() * abc.length);
    result += abc[random]
  }
  return result;
};
let contraseña = generarString(6)
console.log(contraseña)



export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllusuario);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log('holiboli')
 // res.json('responde porfa, necesitamos vernos, te necesito en mi vida')
};

export const createNewusuario = async (req, res) => {
  const { codigo } = req.body;
  let { nombre, email,rol, estado, fecha_alta, fecha_baja, fecha_modi, direccion, telefono} = req.body;

  // validating
  if (codigo == null ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }
  
 

    


    
  
  try {

    let nuevo = 2
    const pool = await getConnection();

    let contraseña = generarString(6)
    console.log(contraseña)

     let claveEncript = bcrypt.hashSync(contraseña,8) + ''
    
//Se pudo enviar la contraseña encriptada
    await pool
      .request()
      .input("codigo", sql.VarChar, codigo)
      .input("nombre", sql.VarChar, nombre)
      .input("email", sql.VarChar, email)
      .input('password', sql.VarChar, claveEncript)
      .input("rol", sql.VarChar, rol)
      .input("estado", sql.Int, nuevo)
      .input("fecha_alta", sql.Date, fecha_alta)
      .input("fecha_modi", sql.Date, fecha_modi)
      .input("fecha_baja", sql.Date, fecha_baja)
      .input("direccion", sql.VarChar, direccion)
      .input("telefono", sql.VarChar, telefono)
      .query(querys.addNewusuario);

  enviar_mail(contraseña, email)

    res.json({ codigo, nombre, email,rol, password: claveEncript ,estado: nuevo, fecha_alta, fecha_baja, fecha_modi, direccion, telefono });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getusuarioById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_usuario", req.params.id_usuario)
      .query(querys.getusuarioById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteusuarioById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_usuario", req.params.id_usuario)
      .query(querys.deleteusuario);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalusuario = async (req, res) => {
  /*const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalusuario);
  console.log(result);
  res.json(result.recordset[0][""]);
*/};

export const updateusuarioById = async (req, res) => {
  const { nombre, password ,email,rol, estado, fecha_alta, fecha_baja, fecha_modi, direccion, telefono } = req.body;

  // validating
  var dat= new Date(); 



  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("email", sql.VarChar, email)
      .input("rol", sql.VarChar, rol)
      .input("estado", sql.Int, estado)
      .input("fecha_alta", sql.Date, fecha_alta)
      .input("fecha_modi", sql.Date, dat)
      .input("fecha_baja", sql.Date, fecha_baja)
      .input("direccion", sql.VarChar, direccion)
      .input("telefono", sql.VarChar, telefono)
      .input("id_usuario", req.params.id_usuario)
      .query(querys.updateusuarioById);
    res.json({ nombre, password: bcrypt.hashSync(password,8) + '' ,email,rol, estado,  fecha_modi:dat, fecha_alta, fecha_baja , direccion, telefono});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


async function verifyPassword() {
  const myPassword = 'Casaaa';
  const hash = '$2b$08$r/8KZ.lfiSNmIcihDnp9DuhzwK8zr4RoR6v21QWjHqnXWqtfo6xpK';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

//verifyPassword()
//Elimiar en creacion modicar y baja
//udate: Fecha de modificacion se queda, lo demás se van

export const signin = async (req, res) => {
  const { email, password } = req.body;
  let userData;
  let pass;

  if (email == null || password == null) {
      return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
      const pool = await getConnection();
      const user = await pool
          .request()
          .input("email", sql.VarChar, email)
          .query(querys.getUserLoginByEMail);

      userData = user.recordset[0];
      if (!userData) return res.status(400).json({ msg: "User not found" });
      if (userData.estado == 0) return res.status(401).json({ msg: "User not active, contact administrator!" });
      

      const passUser = await pool
          .request()
          .input("email", sql.VarChar, email)
          .query(querys.getUserpassword);

      pass = userData.password
      const comparePass = await comparePassword(password, pass);
      if (!comparePass) {
          return res.status(401).json({ token: null, msg: "Incorrect user or password" });
      }

      const token = jwt.sign({ data: userData }, config.secretkey, {
          expiresIn: '1h',
      });
      res.json({ token, userData });

  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};

export const updateusuarioByIdPassword = async (req, res) => {
  const { password} = req.body;

  // validating
  var dat= new Date(); 


  let passwordencriptado = bcrypt.hashSync(password,8) + ''
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input('password', sql.VarChar, passwordencriptado)
      .input("id_usuario", req.params.id_usuario)
      .query(querys.updateusuarioByIdPassword);
    res.json({ password: passwordencriptado  });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const getUsuarioClienteRol = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getUsuarioRolCliente);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}