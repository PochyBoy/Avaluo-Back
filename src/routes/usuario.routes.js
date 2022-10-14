import { Router } from "express";
import {
  getUsuario,
  createNewusuario,
  getusuarioById,
  deleteusuarioById,
  getTotalusuario,
  updateusuarioById,
  signin,
  updateusuarioByIdPassword,
  getUsuarioClienteRol,
} from "../controllers/usuario.controller";
import { verifyToken, isAdmin, isConsultas, isExperto, isPerito, isSolicitante, isCliente } from "../middlewares";


const router = Router();


router.get("/usuario",  getUsuario);
console.log(getUsuario)
router.post("/usuario",[verifyToken ], createNewusuario);

router.get("/usuario/count", getTotalusuario);

router.get("/usuario/:id_usuario", getusuarioById);
  
router.delete("/usuario/:id_usuario", deleteusuarioById);

router.put("/usuario/:id_usuario",  updateusuarioById);

router.post("/login", signin);

router.put("/cambiarpassword/:id_usuario", updateusuarioByIdPassword);

router.get("/usuariocliente", getUsuarioClienteRol);



export default router;
