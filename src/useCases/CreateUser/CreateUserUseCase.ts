import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase{
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ){}
    
    async execute(data: ICreateUserRequestDTO){
        const { email, name } = data
        const userExist = await this.usersRepository.findByEmail(email)
        if (userExist) throw new Error('O usuário já existe')
        const newUser = new User(data)
        await this.usersRepository.save(newUser)

        await this.mailProvider.sendMail({
            to:{
                name: name,
                email: email
            },
            from:{
                name: 'Marcus',
                email: 'mgc.cavalcante28@gmail.com'
            },
            subject: 'Welcome',
            body:'<h1>Typescript</h1>'
        })
    }
}