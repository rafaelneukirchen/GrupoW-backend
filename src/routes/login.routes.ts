import { Router } from 'express';
import LoginUserService from '../services/LoginUserService';

import { userRepository } from './user.routes';

const loginRoute = Router();

loginRoute.post('/', (request, response) => {
  const { email, password } = request.body;

  const loginUserService = new LoginUserService(userRepository);
  const user = loginUserService.execute({ email, password });
  if (user) {
    return response.json({ ...user, password: '' });
  }
  return response.status(400).json({ message: 'Check your credentials' });
});

export default loginRoute;
