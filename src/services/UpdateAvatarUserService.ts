import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

interface AvatarProps {
  id: string;
  avatar: string;
}

class UpdateUserAvatarService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public execute({ id, avatar }: AvatarProps): User {
    try {
      const user = this.userRepository.setAvatar({ id, avatar });
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default UpdateUserAvatarService;
