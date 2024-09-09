import { IMailProvider } from "./interfaces/IMailProvider";

export class Notification {
    private mailProvider: IMailProvider = {} as IMailProvider;
    
    setMailProvider(mailProvider: IMailProvider): void {
        this.mailProvider = mailProvider;
    }

    sendEmail(from: string, to: string): void {
        this.mailProvider.send(from, to)
    }

    sendMessage(mobileNumber: string, message: string): void {
        // 
    }
}