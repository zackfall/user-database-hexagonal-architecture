import { UserRepositoryAdapter } from "./adapters/user-repository-adapter";
import { UserService } from "./application/user-service";
import { User } from "./domain/user";

const newUser: User = { id: "274DA21-DF234D4", username: "Noir", email: "zackfall@outlook.com" }
const newUser2: User = { id: "274DA91-32G4M4M", username: "Hazel", email: "lrbzz02@gmail.com" }
const adapter = new UserRepositoryAdapter();
const service = new UserService(adapter);

service.saveUser(newUser);
service.saveUser(newUser2)
console.log(service.getUserById(newUser.id));
console.log(service.getUserById(newUser2.id));
console.log(service.getUserById("Hola"));