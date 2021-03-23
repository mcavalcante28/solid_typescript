import { User } from "../entities/User";

export interface IUsersRepository{

    // Aqui eu estou instanciando quais métodos existem dentro do repositório
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}   