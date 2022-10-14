import { Router } from "express";
import {
  getUsuario,
  createNewsolicitud,
  getsolicitudById,
  deletesolicitudById,
  getTotalsolicitud,
  updatesolicitudById,
  updatesolicitudByIdCliente  
} from "../controllers/solicitud.controller";

const router = Router();

router.get("/solicitud", getUsuario);
console.log(getUsuario)
router.post("/solicitud", createNewsolicitud);

router.get("/solicitud/count", getTotalsolicitud);

router.get("/solicitud/:id_solicitud", getsolicitudById);

router.delete("/solicitud/:id_solicitud", deletesolicitudById);

router.put("/solicitud/:id_solicitud", updatesolicitudById);

router.put("/solicitudpartedos/:id_usuario",  updatesolicitudByIdCliente)
export default router;
