import { User } from "../domain/user";
import { UserRepository } from "../ports/user-repository";

export class UserRepositoryAdapter implements UserRepository {
  private users: User[] = [];

  getUserById(userId: string): User | null {
    return this.users.find(user => user.id === userId) || null;
  }

  saveUser(user: User): void {
    this.users.push(user);
  }
}