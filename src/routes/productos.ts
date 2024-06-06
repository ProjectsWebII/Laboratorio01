import { Router } from "express";
import {ProductoController} from "../controller/ProductoController";

const routes=Router();

routes.get("",ProductoController.getAll)
routes.post("", ProductoController.create)

export default routes