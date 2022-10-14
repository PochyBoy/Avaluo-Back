import { Router } from "express";
import {
  getUsuario,
  createNewprofesion,
  getprofesionById,
  deleteprofesionById,
  getTotalprofesion,
  updateprofesionById,
} from "../controllers/profesion.controller";

const router = Router();

router.get("/profesion", getUsuario);
console.log(getUsuario)
router.post("/profesion", createNewprofesion);

router.get("/profesion/count", getTotalprofesion);

router.get("/profesion/:id_profesion", getprofesionById);

router.delete("/profesion/:id_profesion", deleteprofesionById);

router.put("/profesion/:id_profesion", updateprofesionById);
export default router;
