import { Message } from "whatsapp-web.js";
import Command from "./Command";

export class CommandNuklir extends Command{

    constructor() {
        super('nuklir', 'Command Nuklir', ['nuklir'])
    }

    execute(msg: Message, args: string[]): void {
        if (args.length < 1) {
            msg.reply(
                '*Waduh 🥵, pm mesra aja yak 🤤*'
            );
            return;
        }
        msg.reply(`*${args.join(' ')}*`);
    }
}