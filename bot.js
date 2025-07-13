require('dotenv').config();
const {Telegraf} = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx)=> ctx.reply("Welcome dear user! how can I help you?"));
bot.command('test', (ctx) => ctx.reply('this is a test command'));
bot.command('askdeep', (ctx) => ctx.reply('Im under devlopment by Zahin. Will be able to answer ya soon'));
bot.hears('deepseaker', (ctx) => ctx.reply('Hello there, how can I help you?'));
bot.hears('hi', (ctx) => ctx.reply('Hello there!'));
bot.launch();