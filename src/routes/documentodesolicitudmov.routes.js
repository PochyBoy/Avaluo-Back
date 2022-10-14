import { Router } from "express";
import {
  getUsuario,
  createNewMovdocumentodesolicitud,
  getMovdocumentodesolicitudById,
  deleteMovdocumentodesolicitudById,
  getTotalMovdocumentodesolicitud,
  updateMovdocumentodesolicitudById,
} from "../controllers/documentodesolicitudmov.controller";

const router = Router();

router.get("/documentodesolicitudmov", getUsuario);
console.log(getUsuario)
router.post("/documentodesolicitudmov", createNewMovdocumentodesolicitud);

router.get("/documentodesolicitudmov/count", getTotalMovdocumentodesolicitud);

router.get("/documentodesolicitudmov/:id_documentodesolicitud", getMovdocumentodesolicitudById);

router.delete("/documentodesolicitudmov/:id_documentodesolicitud", deleteMovdocumentodesolicitudById);

router.put("/documentodesolicitudmov/:id_documentodesolicitud", updateMovdocumentodesolicitudById);
export default router;