import { Router } from "express";
import {
  getUsuario,
  createNewvaloracion,
  getvaloracionById,
  deletevaloracionById,
  getTotalvaloracion,
  updatevaloracionById,
  getvaloracionByEmail,
} from "../controllers/valoracion.controller";
import { verifyToken, isAdmin, isConsultas, isExperto, isPerito, isSolicitante, isCliente } from "../middlewares";

const router = Router();

router.get("/valoracion", getUsuario);
console.log(getUsuario)
router.post("/valoracion", createNewvaloracion);

router.get("/valoracion/count", getTotalvaloracion);

router.get("/valoracion/:id_valoracion", getvaloracionById);

router.delete("/valoracion/:id_valoracion", deletevaloracionById);

router.put("/valoracion/:id_valoracion",[verifyToken, isCliente], updatevaloracionById);

router.get("/valoracionemail/:email", getvaloracionByEmail)
export default router;
