import { uuid } from "uuidv4";


// Model de usuário
export class User {
    public readonly id: string; // Configurei o ID apenas para leitura
    public name: string;
    public email: string;
    public password: string;


    constructor(props: Omit<User, 'id'>, id?:string){ // Para construir um novo User eu não preciso do ID
        Object.assign(this, props); // Assim eu consigo simplificar o this.property = property
        if(!id) this.id = uuid() // Remover do banco a necessidade de criar um ID para o User (não gostei disso)
    }
}