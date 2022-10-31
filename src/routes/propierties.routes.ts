import { Router } from "express";
import { createPropertiesController, listPropertiesController} from "../controllers/properties.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";


const propertiesRouter = Router()

propertiesRouter.post('', ensureAuthMiddleware, ensureIsAdmMiddleware,createPropertiesController)
propertiesRouter.get('',listPropertiesController)

export default propertiesRouter