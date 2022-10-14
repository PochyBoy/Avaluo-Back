import { Router } from "express";
import {
  getUsuario,
  createNewtipodebien,
  gettipodebienById,
  deletetipodebienById,
  getTotaltipodebien,
  updatetipodebienById,
} from "../controllers/tipodebien.controller";

const router = Router();

router.get("/tipodebien", getUsuario);
console.log(getUsuario)
router.post("/tipodebien", createNewtipodebien);

router.get("/tipodebien/count", getTotaltipodebien);

router.get("/tipodebien/:id_tipodebien", gettipodebienById);

router.delete("/tipodebien/:id_tipodebien", deletetipodebienById);

router.put("/tipodebien/:id_tipodebien", updatetipodebienById);
export default router;
