import { Router } from 'express';
import usersRouter from './user.routes';
import loginRouter from './login.routes';
import postRouter from './post.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/login', loginRouter);
routes.use('/post', postRouter);

export default routes;
