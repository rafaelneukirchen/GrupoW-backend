import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import UserRepository from '../repositories/UserRepository';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateAvatarUserService';

const usersRouter = Router();

export const userRepository = new UserRepository();

// faz o multer receber as configurações que definimos no uploadConfig
const upload = multer(uploadConfig);

usersRouter.get('/', (request, response) => {
  return response.json(userRepository.getUsers());
});

usersRouter.post('/', (request, response) => {
  const { name, email, password, password_confirm } = request.body;

  const createUserService = new CreateUserService(userRepository);
  try {
    const user = createUserService.execute({
      email,
      name,
      password,
      password_confirm,
    });

    return response.json({ ...user, password: '' });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

// no upload.single o parametro que vai dentro é o nome do campo que vai conter o arquivo no envio
// caso de erro ao tentar utilizar o upload.single é só ir em node_modules/multer e deletar o node_modules que esta la dentro (é um erro do multer)
usersRouter.patch('/avatar', upload.single('avatar'), (request, response) => {
  const { file } = request;
  const { id } = request.body;

  try {
    const updateAvatarUserService = new UpdateUserAvatarService(userRepository);
    const user = updateAvatarUserService.execute({ id, avatar: file.filename });
    return response.json({ ...user, password: '' });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

export default usersRouter;
