import type { Bot } from "grammy";
import { startKeyboard, adminKeyboard, masterKeyboard} from "../keyboards/main.keyboard.js";

export function registerStartCommand(bot: Bot){
    bot.command("start", (ctx) => {
        ctx.reply("Welcome, user!", {
            reply_markup: startKeyboard,
        });
    });
    
    bot.command("admin", (ctx) => {
      ctx.reply("Welcome, admin!", {
        reply_markup: adminKeyboard,
      });
    });

    bot.command("master", (ctx) => {
      ctx.reply("Welcome, master!", {
        reply_markup: masterKeyboard,
      });
    });
}