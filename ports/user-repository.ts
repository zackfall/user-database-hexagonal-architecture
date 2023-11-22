import { User } from "../domain/user";

export interface UserRepository {
  getUserById(userId: string): User | null;
  saveUser(user: User): void;
}