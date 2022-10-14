import { Router } from "express";
import {
  getUsuario,
  createNewmunicipio,
  getmunicipioById,
  deletemunicipioById,
  getTotalmunicipio,
  updatemunicipioById,
} from "../controllers/municipio.controller";

const router = Router();

router.get("/municipio", getUsuario);
console.log(getUsuario)
router.post("/municipio", createNewmunicipio);

router.get("/municipio/count", getTotalmunicipio);

router.get("/municipio/:id_municipio", getmunicipioById);

router.delete("/municipio/:id_municipio", deletemunicipioById);

router.put("/municipio/:id_municipio", updatemunicipioById);
export default router;
