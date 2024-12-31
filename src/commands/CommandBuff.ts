import { Message } from "whatsapp-web.js";
import Command from "./Command";

export class CommandBuff extends Command{

    constructor() {
        super('buff', 'Command Buff', ['buff'])
    }

    execute(msg: Message, args: string[]): void {
        if (args.length < 1) {
            msg.reply(
                '*♨️KODE BUFF TORAM ONLINE♨️*\n\n' + 
                '*🎯ACCURACY🎯*\n' +
                '*4261111 - Lv10*\n' +
                '*1010013 - Lv9*\n' +
                '*7010077 - Lv9*\n' +
                '*3188000 - Lv8*\n\n' +
                '*😡+AGGRO%😡*\n' +
                '*7171717 - Lv10*\n' +
                '*3030110 - Lv10*\n' +
                '*2020606 - Lv10*\n' +
                '*3053131 - Lv10*\n\n' +
                '*🙄-AGGRO%🙄*\n' +
                '*1010038 - Lv10*\n' +
                '*1010002 - Lv10*\n' +
                '*1010147 - Lv10*\n' +
                '*1016646 - Lv10*\n\n' +
                '*🏃🏼‍♀️AGI🏃🏼‍♀️*\n' +
                '*7162029 - Lv10*\n' +
                '*2020909 - Lv9*\n' +
                '*5130123 - Lv9*\n' +
                '*1010050 - Lv8*\n\n' +
                '*✨AMPR✨*\n' +
                '*1010017 - Lv10*\n' +
                '*5010031 - Lv10*\n' +
                '*2010068 - Lv10*\n' +
                '*5236969 - Lv10*\n\n' +
                '*🚧FRACTIONAL BARRIER🚧*\n' +
                '*7010082 - Lv10*\n' +
                '*1222002 - Lv8*\n' +
                '*6181999 - Lv8*\n' +
                '*6010062 - Lv8*\n\n' +
                '*⚡️CRITICAL RATE⚡️*\n' +
                '*7162029 - Lv10*\n' +
                '*1100000 - Lv10*\n' +
                '*1010092 - Lv10*\n' +
                '*1010006 - Lv10*\n\n' +
                '*🏹DEX🏹*\n' +
                '*5010092 - Lv10*\n' +
                '*4084545 - Lv10*\n' +
                '*1010058 - Lv10*\n' +
                '*1010106 - Lv10*\n\n' +
                '*🎰DROP RATE🎰*\n' +
                '*1010084 - Lv6*\n' +
                '*4196969 - Lv6*\n\n' +
                '*🌚DTE DARK🌚*\n' +
                '*5010092 - Lv10*\n' +
                '*3210104 - Lv10*\n' +
                '*1190020 - Lv10*\n' +
                '*1020345 - Lv10*\n\n' +
                '*🌎DTE EARTH🌎*\n' +
                '*2020202 - Lv10*\n' +
                '*3210103 - Lv10*\n' +
                '*1011111 - Lv10*\n' +
                '*2022222 - Lv10*\n\n' +
                '*🔥DTE FIRE🔥*\n' +
                '*3210106 - Lv10*\n' +
                '*7011001 - Lv10*\n' +
                '*1010799 - Lv9*\n' +
                '*2010091 - Lv8*\n\n' +
                '*☄️DTE LIGHT☄️*\n' +
                '*3210105 - Lv10*\n' +
                '*1020345 - Lv10*\n' +
                '*4046666 - Lv9*\n' +
                '*4016699 - Lv8*\n\n' +
                '*💫DTE NEUTRAL💫*\n' +
                '*3210102 - Lv10*\n' +
                '*3099876 - Lv10*\n' +
                '*1011902 - Lv9*\n' +
                '*6061294 - Lv8*\n\n' +
                '*💦DTE WATER💦*\n' +
                '*7150030 - Lv10*\n' +
                '*3210100 - Lv10*\n' +
                '*3062111 - Lv9*\n' +
                '*2260006 - Lv9*\n\n' +
                '*💨DTE WIND💨*\n' +
                '*3210101 - Lv10*\n' +
                '*3030303 - Lv10*\n' +
                '*3062111 - Lv9*\n' +
                '*1010055 - Lv9*\n\n' +
                '*🧠INT🧠*\n' +
                '*2020707 - Lv10*\n' +
                '*6061294 - Lv10*\n' +
                '*1010489 - Lv10*\n' +
                '*6010701 - Lv10*\n\n' +
                '*🧙🏻MAGICAL RESIST🧙🏻*\n' +
                '*2020505 - Lv10*\n' +
                '*5200052 - Lv10*\n' +
                '*1010004 - Lv10*\n' +
                '*7010016 - Lv10*\n\n' +
                '*❤️MAX HP❤️*\n' +
                '*1010203 - Lv10*\n' +
                '*6010062 - Lv10*\n' +
                '*1010032 - Lv10*\n' +
                '*1010084 - Lv10*\n\n' +
                '*💙MAX MP💙*\n' +
                '*6052000 - Lv10*\n' +
                '*1020808 - Lv10*\n' +
                '*1200001 - Lv10*\n' +
                '*1220069 - Lv10*\n\n' +
                '*👷PHYSICAL RESIST👷*\n' +
                '*1020001 - Lv10*\n' +
                '*1100000 - Lv10*\n' +
                '*3010034 - Lv10*\n' +
                '*7010014 - Lv10*\n\n' +
                '*💪STR💪*\n' +
                '*1110033 - Lv10*\n' +
                '*1011069 - Lv10*\n' +
                '*7070777 - Lv10*\n' +
                '*7031997 - Lv10*\n\n' +
                '*🗡WEAPON ATK🗡*\n' +
                '*3081024 - Lv10*\n' +
                '*1010810 - Lv10*\n' +
                '*6010024 - Lv10*\n' +
                '*1010099 - Lv10*\n\n' +
                '*📖KEMBALI KE MENU📖 [.menu]*'
            );
            return;
        }
        msg.reply(`*${args.join(' ')}*`);
    }
}