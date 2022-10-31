import { Router } from 'express';
import { createSchedulesController, listSchedulesIdPropertieController } from '../controllers/schedules.controller';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middlewares';
import ensureIsAdmMiddleware from '../middlewares/ensureIsAdm.middleware';

const schedulesRouter = Router()

schedulesRouter.post('', ensureAuthMiddleware, createSchedulesController)

schedulesRouter.get('/properties/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, listSchedulesIdPropertieController)

export default schedulesRouter