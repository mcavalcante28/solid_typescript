import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";


// implementa o método para envio de email
export class MailTrapMailProvider implements IMailProvider{
    private transporter: Mail;
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "410b0f66cc1cb9",
              pass: "55476dcf3b1dad"
            }
          });
    }
    
    async sendMail(message: IMessage): Promise<void>{
        await this.transporter.sendMail({
            to:{
                name: message.to.name,
                address: message.to.email
            },
            from:{
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}