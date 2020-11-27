import Post from '../models/Post';
import PostRepository from '../repositories/PostRepository';
import UserRepository from '../repositories/UserRepository';

interface CreatePostsProps {
  id: string;
  text: string;
}

class CreatePostService {
  private postRepository: PostRepository;

  private userRepository: UserRepository;

  constructor(postRepository: PostRepository, userRepository: UserRepository) {
    this.postRepository = postRepository;
    this.userRepository = userRepository;
  }

  public execute({ id, text }: CreatePostsProps): Post {
    const user = this.userRepository.getUsers().filter(u => u.id === id)[0];
    if (!user) {
      throw new Error("User does't exist");
    }
    if (!text) {
      throw new Error('The text is empty');
    }
    const post = new Post({ text, user });
    this.postRepository.addPost(post);

    return post;
  }
}

export default CreatePostService;
