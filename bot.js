require('dotenv').config();
const http = require('http');
const {Telegraf} = require('telegraf');
const {getAnswer} = require('./api');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx)=> ctx.reply("Welcome dear user! how can I help you?"));
bot.command('test', (ctx) => ctx.reply('this is a test command'));
bot.hears('deepseaker', (ctx) => ctx.reply('Hello there, how can I help you?'));
bot.hears('Deepseaker', (ctx) => ctx.reply('Hello there, how can I help you?'));

bot.command('askdeep', async(ctx) => {
    const messageText = ctx.message.text;
 
  const question = messageText.replace('/askdeep', '').trim();

  if (question.length === 0) {
    ctx.reply('Please provide a question after the /ask command.');
  } else {
    ctx.reply("Loading...");
    const ans = await getAnswer(question);
    ctx.reply(ans);
  }
});
bot.launch();

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const response = { message: 'the server is online' };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on: ${PORT}`);
});