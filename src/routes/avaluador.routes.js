import { Router } from "express";
import {
  getUsuario,
  createNewavaluador,
  getavaluadorById,
  deleteavaluadorById,
  getTotalavaluador,
  updateavaluadorById,
  getfechanull
} from "../controllers/avaluador.controller";

const router = Router();

router.get("/avaluador", getUsuario);

router.post("/avaluador", createNewavaluador);

router.get("/avaluador/count", getTotalavaluador);

router.get("/avaluador/:id_avaluador", getavaluadorById);

router.delete("/avaluador/:id_avaluador", deleteavaluadorById);

router.put("/avaluador/:id_avaluador", updateavaluadorById);

router.get("/avaluadorfiltro/", getfechanull)

export default router;
