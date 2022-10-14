import { Router } from "express";
import {
  getUsuario,
  createNewCatdocumentodesolicitud,
  getCatdocumentodesolicitudById,
  deleteCatdocumentodesolicitudById,
  getTotalCatdocumentodesolicitud,
  updateCatdocumentodesolicitudById,
} from "../controllers/documentodesolicitudcat.controller";

const router = Router();

router.get("/documentodesolicitudcat", getUsuario);
console.log(getUsuario)
router.post("/documentodesolicitudcat", createNewCatdocumentodesolicitud);

router.get("/documentodesolicitudcat/count", getTotalCatdocumentodesolicitud);

router.get("/documentodesolicitudcat/:id_documentodesolicitud", getCatdocumentodesolicitudById);

router.delete("/documentodesolicitudcat/:id_documentodesolicitud", deleteCatdocumentodesolicitudById);

router.put("/documentodesolicitudcat/:id_documentodesolicitud", updateCatdocumentodesolicitudById);
export default router;