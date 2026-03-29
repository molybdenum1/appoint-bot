import "dotenv/config";
import { bot } from "./app/bot.js";

// bot.on("message", (ctx) => {
//   ctx.reply("You said: " + ctx.message.text);
// });

// Обработчик ошибок
bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  console.error("Error:", e);

  // Отправляем сообщение пользователю об ошибке
  if (ctx.chat) {
    ctx
      .reply("Sorry, an error occurred. Please try again later.")
      .catch(console.error);
  }
});

console.log("Bot is starting...");
bot.start();
console.log("Bot started.");
