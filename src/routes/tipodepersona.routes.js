import { Router } from "express";
import {
  getUsuario,
  createNewtipodepersona,
  gettipodepersonaById,
  deletetipodepersonaById,
  getTotaltipodepersona,
  updatetipodepersonaById,
} from "../controllers/tipodepersona.controller";

const router = Router();

router.get("/tipodepersona", getUsuario);
console.log(getUsuario)
router.post("/tipodepersona", createNewtipodepersona);

router.get("/tipodepersona/count", getTotaltipodepersona);

router.get("/tipodepersona/:id_tipodepersona", gettipodepersonaById);

router.delete("/tipodepersona/:id_tipodepersona", deletetipodepersonaById);

router.put("/tipodepersona/:id_tipodepersona", updatetipodepersonaById);
export default router;
