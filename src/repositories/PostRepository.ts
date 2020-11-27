import Post from '../models/Post';

import { userRepository } from '../routes/user.routes';

class PostRepository {
  private posts: Post[];

  constructor() {
    this.posts = [];
  }

  public getAll(): Post[] {
    const posts_return = this.posts.map(p => {
      const user_temp = userRepository
        .getUsers()
        .filter(u => u.id === p.user.id)[0];

      return { ...p, user: { ...user_temp, password: '' } };
    });

    return posts_return;
  }

  public addPost(post: Post): Post {
    this.posts.push(post);

    return post;
  }
}

export default PostRepository;
