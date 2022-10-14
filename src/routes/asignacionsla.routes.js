import { Router } from "express";
import {
  getUsuario,
  createNewasignacionsla,
  getasignacionslaById,
  deleteasignacionslaById,
  getTotalasignacionsla,
  updateasignacionslaById,
} from "../controllers/asignacionsla.controller";

const router = Router();

router.get("/asignacionsla", getUsuario);

router.post("/asignacionsla", createNewasignacionsla);

router.get("/asignacionsla/count", getTotalasignacionsla);

router.get("/asignacionsla/:id_asignacionsla", getasignacionslaById);

router.delete("/asignacionsla/:id_asignacionsla", deleteasignacionslaById);

router.put("/asignacionsla/:id_asignacionsla", updateasignacionslaById);
export default router;
