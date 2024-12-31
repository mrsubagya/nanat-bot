import { CommandSay } from "./commands/CommadSay";
import Command from "./commands/Command";
import { CommandMenu } from "./commands/CommandMenu";
import { CommandBuff } from "./commands/CommandBuff";
import { CommandLeveling } from "./commands/CommandLeveling";
import { CommandNuklir } from "./commands/CommandNuklir";

const commands: Command[] = [
    new CommandSay(),
    new CommandMenu(),
    new CommandBuff(),
    new CommandLeveling(),
    new CommandNuklir()
];

export default commands