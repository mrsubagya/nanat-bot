import { Message } from "whatsapp-web.js";
import Command from "./Command";

export class CommandMenu extends Command{

    constructor() {
        super('menu', 'Command Menu', ['menu'])
    }

    execute(msg: Message, args: string[]): void {
        if (args.length < 1) {
            msg.reply(
                '*Hi..Aku Nanat Bot!*\n' + 
                '*Gunakan string (.) di setiap awal pilihan menu.*\n' +
                '*Selamat menikmati fitur kami!*\n\n' +
                '*📖 MENU 📖*\n\n' +
                '*♨️ Kode Buff Land [.buff]*\n' +
                '*⚔️ List Leveling [.leveling]*\n' +
                '*🔞 Kode Nuklir [.nuklir]*'
            );
            return;
        }
        msg.reply(`*${args.join(' ')}*`);
    }
}