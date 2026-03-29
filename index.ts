import { Bot, Context, Keyboard } from "grammy";
import "dotenv/config";
import { createUser, findUsers } from "./repositories/users.repository.js";

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

// bot.on("message", (ctx) => {
//   ctx.reply("You said: " + ctx.message.text);
// });

bot.hears("Option 1", async (ctx) => {
  const users = await findUsers();
  console.log(users)
  console.log(ctx.from);
  ctx.reply("You selected Option 1");
});

bot.hears("Option 2", async (ctx: Context) => {
  if (!ctx.from) {
    ctx.reply("User information is not available.");
    return;
  }
  await createUser(ctx.from.id.toString(), ctx.from.first_name);
  ctx.reply("You selected Option 2");
});

// Обработчик ошибок
bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  console.error("Error:", e);
  
  // Отправляем сообщение пользователю об ошибке
  if (ctx.chat) {
    ctx.reply("Sorry, an error occurred. Please try again later.").catch(console.error);
  }
});

console.log("Bot is starting...");
bot.start();
console.log("Bot started.");
