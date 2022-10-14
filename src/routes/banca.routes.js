import { Router } from "express";
import {
  getUsuario,
  createNewbanca,
  getbancaById,
  deletebancaById,
  getTotalbanca,
  updatebancaById,
} from "../controllers/banca.controller";

const router = Router();

router.get("/banca", getUsuario);

router.post("/banca", createNewbanca);

router.get("/banca/count", getTotalbanca);

router.get("/banca/:id_banca", getbancaById);

router.delete("/banca/:id_banca", deletebancaById);

router.put("/banca/:id_banca", updatebancaById);
export default router;
