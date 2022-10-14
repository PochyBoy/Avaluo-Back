import { Router } from "express";
import {
  
  updatesolicitudByIdput,
} from "../controllers/solicitudput.controller";

const router = Router();



router.put("/solicitudput/:id_solicitud", updatesolicitudByIdput);
export default router;
