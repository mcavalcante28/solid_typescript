interface IAddress{
    email: string;
    name: string;
}

export interface IMessage{
    to: IAddress;
    from: IAddress;
    subject: string;
    body: string;
}

export interface IMailProvider{
    // método(parâmetro: tipo): retorno<tipo>
    // sempre que um método é assincrono ele retorna uma promise
    sendMail(message: IMessage): Promise<void>; 
}