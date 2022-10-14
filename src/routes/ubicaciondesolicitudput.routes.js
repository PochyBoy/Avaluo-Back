import { Router } from "express";
import {
  updateubicaciondesolicitudById,
} from "../controllers/ubicaciondesolicitudput.controller";

const router = Router();

router.put("/ubicaciondesolicitudput/:numerodesolicitante", updateubicaciondesolicitudById);
export default router;