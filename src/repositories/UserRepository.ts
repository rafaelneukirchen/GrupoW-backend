import User from '../models/User';

interface UserDTO {
  name: string;
  email: string;
  password: string;
}
interface AvatarProps {
  id: string;
  avatar: string;
}

class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public create({ name, email, password }: UserDTO): User {
    const user = new User({ name, email, password });
    this.users.push(user);

    return user;
  }

  public getUsers(): User[] {
    return this.users;
  }

  public setAvatar({ id, avatar }: AvatarProps): User {
    let i = -1;
    const user = this.users.filter((u, index) => {
      if (u.id === id) {
        i = index;
      }
      return u.id === id;
    })[0];
    const userWithAvatar = { ...user, avatar };
    if (i > -1) {
      this.users[i] = userWithAvatar;
    } else {
      throw new Error('User not exist.');
    }

    return userWithAvatar;
  }
}

export default UserRepository;
