import type { Bot, Context } from "grammy";
import {
  findUsers,
  createUser,
  createMasterUser,
} from "../../repositories/users.repository.js";

export function registerMenuHears(bot: Bot) {
  bot.hears("Find Users", async (ctx) => {
    const users = await findUsers();
    console.log(users);
    console.log(ctx.from);
    ctx.reply("You selected Find Users");
  });

  bot.hears("Reg User", async (ctx: Context) => {
    if (!ctx.from) {
      ctx.reply("User information is not available.");
      return;
    }
    await createUser(ctx.from.id.toString(), ctx.from.first_name);
    ctx.reply("You selected Reg User");
  });

  bot.hears("Add master", async (ctx: Context) => {
    if (!ctx.from) {
      ctx.reply("User information is not available.");
      return;
    }
    const randomId = Math.floor(Math.random() * 100000);
    const MasterName = "Master " + randomId;
    await createMasterUser(randomId.toString(), MasterName);
    ctx.reply("You selected Reg Master");
  });
}
