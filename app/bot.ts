import { Bot } from "grammy";
import { registerHandlers } from "./register-handlers.js";

const token = process.env.BOT_API_KEY;
if (!token) {
  throw new Error("BOT_API_KEY environment variable is required");
}
export const bot = new Bot(token);

registerHandlers(bot);
