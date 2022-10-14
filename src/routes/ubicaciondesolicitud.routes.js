import { Router } from "express";
import {
  createNewubicaciondesolicitud,
  getUsuario,
  deleteubicaciondesolicitudById,
  updateubicaciondesolicitudById,
  getTotalubicaciondesolicitud,
  getubicaciondesolicitudById
} from "../controllers/ubicaciondesolicitud.controller";

const router = Router();

router.get("/ubicaciondesolicitud", getUsuario);
console.log(getUsuario)
router.post("/ubicaciondesolicitud", createNewubicaciondesolicitud);

router.get("/ubicaciondesolicitud/count", getTotalubicaciondesolicitud);

router.get("/ubicaciondesolicitud/:id_ubicaciondesolicitud", getubicaciondesolicitudById);

router.delete("/ubicaciondesolicitud/:id_ubicaciondesolicitud", deleteubicaciondesolicitudById);

router.put("/ubicaciondesolicitud/:id_ubicaciondesolicitud", updateubicaciondesolicitudById);
export default router;