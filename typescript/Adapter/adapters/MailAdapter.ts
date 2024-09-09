import { SendGridEmailProvider } from "../SendGridEmailProvider";
import { IMailProvider } from "../interfaces/IMailProvider";

export class MailAdapter implements IMailProvider {
    send(from: string, to: string): void {
        const sendGridEmailProvider = new SendGridEmailProvider();
        sendGridEmailProvider.send(from, to);
    }
}