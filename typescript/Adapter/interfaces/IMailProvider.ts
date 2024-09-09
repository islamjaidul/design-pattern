export interface IMailProvider {
    send(from: string, to: string): void
}