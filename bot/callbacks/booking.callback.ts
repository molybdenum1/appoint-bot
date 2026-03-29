import { Bot } from "grammy";

export function registerBookingCallbacks(bot: Bot) {
  bot.callbackQuery(/^service:/, async (ctx) => {
    const serviceId = ctx.callbackQuery.data.split(":")[1];
    await ctx.answerCallbackQuery();
    await ctx.reply(`Выбрана услуга ${serviceId}`);
  });
}