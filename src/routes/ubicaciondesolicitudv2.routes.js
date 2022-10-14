import { Router } from "express";
import {
  getUsuario,
  getubicaciondesolicitudByIdv2,
  updateubicaciondesolicitudByIdv2,
  createNewubicaciondesolicitud,
  deleteubicaciondesolicitudByIdv2
} from "../controllers/ubicaciondesolicitudV2.controller";

const router = Router();

router.get("/ubicaciondesolicitudv2", getUsuario);
console.log(getUsuario)
router.post("/ubicaciondesolicitudv2", createNewubicaciondesolicitud);
router.get("/ubicaciondesolicitudv2/:numerodesolicitante", getubicaciondesolicitudByIdv2);
router.delete("/ubicaciondesolicitudv2/:numerodesolicitante", deleteubicaciondesolicitudByIdv2);
router.put("/ubicaciondesolicitudv2/:numerodesolicitante", updateubicaciondesolicitudByIdv2);
export default router;