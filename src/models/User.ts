import { v4 as uuidV4 } from 'uuid';

class User {
  id: string;

  name: string;

  email: string;

  password: string;

  avatar: string;

  constructor({ name, email, password }: Omit<User, 'id' | 'avatar'>) {
    this.id = uuidV4();
    this.name = name;
    this.email = email;
    this.password = password;
    this.avatar = '';
  }
}

export default User;
