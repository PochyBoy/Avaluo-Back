import { Router } from "express";
import {
  getUsuario,
  createNewbien,
  getbienById,
  deletebienById,
  getTotalbien,
  updatebienById,
} from "../controllers/bien.controller";

const router = Router();

router.get("/bien", getUsuario);
console.log(getUsuario)
router.post("/bien", createNewbien);

router.get("/bien/count", getTotalbien);

router.get("/bien/:id_bien", getbienById);

router.delete("/bien/:id_bien", deletebienById);

router.put("/bien/:id_bien", updatebienById);
export default router;
