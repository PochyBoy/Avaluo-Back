import { Router } from "express";
import {
  getUsuario,
  createNewconvenios,
  getconveniosById,
  deleteconveniosById,
  getTotalconvenios,
  updateconveniosById,
} from "../controllers/convenios.controller";

const router = Router();

router.get("/convenios", getUsuario);
console.log(getUsuario)
router.post("/convenios", createNewconvenios);

router.get("/convenios/count", getTotalconvenios);

router.get("/convenios/:id", getconveniosById);

router.delete("/convenios/:id", deleteconveniosById);

router.put("/convenios/:id", updateconveniosById);
export default router;
