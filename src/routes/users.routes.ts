import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controllers";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import ensureOwnerMiddleware from "../middlewares/ensureOwner.middlewares";
import ensureSoftMiddleware from "../middlewares/ensureSoft.middlewares";

const userRoutes = Router();

userRoutes.post('', createUserController);  
userRoutes.get('', ensureAuthMiddleware, ensureIsAdmMiddleware, listUsersController); 

userRoutes.patch('/:id', ensureAuthMiddleware, ensureOwnerMiddleware, updateUserController);

userRoutes.delete('/:id', ensureAuthMiddleware, ensureSoftMiddleware, deleteUserController); 

export default userRoutes;
