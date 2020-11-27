import { Router } from 'express';
import PostRepository from '../repositories/PostRepository';
import CreatePostService from '../services/CreatePostService';
import { userRepository } from './user.routes';

const postRouter = Router();

const postRepository = new PostRepository();

postRouter.get('/', (request, response) => {
  return response.json(postRepository.getAll());
});

postRouter.post('/', (request, response) => {
  try {
    const { id, text } = request.body;

    const createPostService = new CreatePostService(
      postRepository,
      userRepository,
    );

    const post = createPostService.execute({ id, text });

    return response.json({ ...post, user: { ...post.user, password: '' } });
  } catch (err) {
    return response
      .status(400)
      .json({ message: 'Failed to create a new Post.' });
  }
});

export default postRouter;
