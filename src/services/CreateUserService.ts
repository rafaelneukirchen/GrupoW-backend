import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

interface UserDTO {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

class CreateUserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public execute({ email, name, password, password_confirm }: UserDTO): User {
    if (!email || !password || !password_confirm || !name) {
      throw new Error('Missing fields.');
    }
    if (password !== password_confirm) {
      throw new Error('The passwords do not match.');
    }

    const exist = this.userRepository.getUsers().filter(u => u.email === email);
    if (exist[0]) {
      throw new Error('E-mail already registered ');
    }

    const user = this.userRepository.create({ name, email, password });
    return user;
  }
}

export default CreateUserService;
