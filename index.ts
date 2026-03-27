import { Bot, Keyboard } from "grammy";
import "dotenv/config";

const token = process.env.BOT_API_KEY;
if (!token) {
  throw new Error("BOT_API_KEY environment variable is required");
}
const bot = new Bot(token);

const startKeyboard = new Keyboard()
  .text("Option 1")
  .row()
  .text("Option 2")
  .row();

bot.command("start", (ctx) => {
  ctx.reply("Welcome!", {
    reply_markup: startKeyboard,
  });
});

bot.on("message", (ctx) => {
  ctx.reply("You said: " + ctx.message.text);
});

console.log("Bot is starting...");
bot.start();
console.log("Bot started.");
