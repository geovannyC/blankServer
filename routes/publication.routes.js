("use strict");
import { Router } from "express";
import { prueba } from "../controls/publication.control.js";
const router = Router();

router.get("/prueba", prueba);

export default router;
