import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

interface UserDTO {
  email: string;
  password: string;
}

class LoginUserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public execute({ email, password }: UserDTO): User {
    const users = this.userRepository.getUsers();

    return users.filter(u => u.email === email && u.password === password)[0];
  }
}

export default LoginUserService;
