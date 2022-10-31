import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import userRoutes from './routes/users.routes';
import sessionRoutes from './routes/sessions.routes';
import handleErrorMiddleware from './middlewares/handleError.middleware';
import categoriesRouter from './routes/categories.routes';
import propertiesRouter from './routes/propierties.routes';
import schedulesRouter from './routes/schedules.routes';

const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', sessionRoutes)
app.use('/categories',categoriesRouter)
app.use('/properties', propertiesRouter)
app.use('/schedules',schedulesRouter)

app.use(handleErrorMiddleware)
export default app