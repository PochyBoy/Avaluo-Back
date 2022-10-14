import { Router } from "express";
import {
  getUsuario,
  createNewasignacion,
  getasignacionById,
  deleteasignacionById,
  getTotalasignacion,
  updateasignacionById,
} from "../controllers/asignacion.controller";

const router = Router();

router.get("/asignacion", getUsuario);

router.post("/asignacion", createNewasignacion);

router.get("/asignacion/count", getTotalasignacion);

router.get("/asignacion/:id_asignacion", getasignacionById);

router.delete("/asignacion/:id_asignacion", deleteasignacionById);

router.put("/asignacion/:id_asignacion", updateasignacionById);
export default router;
