export class SendGridEmailProvider {
    send(from: string, to: string): void {
        console.log(`Email sent FROM ${from} TO ${to}`);    
    }
}