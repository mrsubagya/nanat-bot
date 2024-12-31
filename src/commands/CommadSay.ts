import { Message } from "whatsapp-web.js";
import Command from "./Command";

export class CommandSay extends Command{
    
    constructor(){
        super('say', 'ini adalah command say', ['say2'])
    }

    execute(msg: Message, args: string[]): void {
        if (args.length < 1) {
            msg.reply(
                '*Hi..Aku Nanat Bot!*\n' + 
                '*Gunakan perintah [.menu] untuk menampilkan*\n\n' +
                '*📖MENU📖*\n\n' +
                '*Selamat menikmati fitur kami!*'
            );
            return;
        }
        msg.reply(`*${args.join(' ')}*`);
    }
    
    

}