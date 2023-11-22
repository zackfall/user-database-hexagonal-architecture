import { UserRepository } from '../ports/user-repository';
import { User } from '../domain/user';

export class UserService {
  constructor(private userRepository: UserRepository) { }

  getUserById(userId: string): User | null {
    return this.userRepository.getUserById(userId);
  }

  saveUser(user: User): void {
    this.userRepository.saveUser(user);
    console.log(`User ${user.username} saved.`);
  }
}