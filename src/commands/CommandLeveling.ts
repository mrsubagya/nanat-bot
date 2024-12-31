import { Message } from "whatsapp-web.js";
import Command from "./Command";

export class CommandLeveling extends Command{

    constructor() {
        super('leveling', 'Command Leveling', ['leveling'])
    }

    execute(msg: Message, args: string[]): void {
        if (args.length < 1) {
            msg.reply(
                '*Fitur masih dalam maintenance, orangnya sibuk kerja kebelet umroh*'
            );
            return;
        }
        msg.reply(`*${args.join(' ')}*`);
    }
}