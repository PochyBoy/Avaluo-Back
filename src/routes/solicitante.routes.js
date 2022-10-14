import { Router } from "express";
import {
  getUsuario,
  createNewsolicitante,
  getsolicitanteById,
  deletesolicitanteById,
  getTotalsolicitante,
  updatesolicitanteById,
} from "../controllers/solicitante.controller";

const router = Router();

router.get("/solicitante", getUsuario);
console.log(getUsuario)
router.post("/solicitante", createNewsolicitante);

router.get("/solicitante/count", getTotalsolicitante);

router.get("/solicitante/:id_solicitante", getsolicitanteById);

router.delete("/solicitante/:id_solicitante", deletesolicitanteById);

router.put("/solicitante/:id_solicitante", updatesolicitanteById);
export default router;
