import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


// implementação dos métodos que vão acessar o banco
export class PostgresUsersRepostory implements IUsersRepository{

    private users: User[] = [];
    async findByEmail(email: string): Promise<User>{
        const user = this.users.find(user => user.email == email)
        return user
    }

    async save(user: User): Promise<void>{
        this.users.push(user)
        console.log(this.users)
    }
}