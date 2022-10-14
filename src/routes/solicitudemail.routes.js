import { Router } from "express";
import {

  getsolicitudByIdemail,
 
} from "../controllers/solicitudemail.controller";

const router = Router();


router.get("/solicitudemail/:correo_electronico", getsolicitudByIdemail);


export default router;
