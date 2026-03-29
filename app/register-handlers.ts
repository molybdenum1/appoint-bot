import type { Bot } from "grammy";
import { registerStartCommand } from "../bot/commands/start.command.js";
import { registerMenuHears } from "../bot/hears/menu.hears.js";

export function registerHandlers(bot: Bot) {
  registerStartCommand(bot);
  registerMenuHears(bot);
}
