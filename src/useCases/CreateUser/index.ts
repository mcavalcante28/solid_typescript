import { MailTrapMailProvider } from "../../providers/utils/MailtrapProvider";
import { PostgresUsersRepostory } from "../../repositories/utils/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";



const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepostory = new PostgresUsersRepostory()


const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepostory,
    mailTrapMailProvider
)

const createUserUserController = new CreateUserController(
    createUserUseCase
)


export { createUserUseCase, createUserUserController}