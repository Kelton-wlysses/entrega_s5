import { Router } from "express";
import { createCategorieController, listCategorieIdPropeties, listCategoriesController } from "../controllers/categories.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const categoriesRouter = Router();

categoriesRouter.post('', ensureAuthMiddleware, ensureIsAdmMiddleware ,createCategorieController);
categoriesRouter.get('',listCategoriesController)
categoriesRouter.get('/:id/properties', listCategorieIdPropeties)

export default categoriesRouter
