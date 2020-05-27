require('dotenv').config();
const { Telegraf } = require('telegraf')

const commands = require('./src/commands');

const bot = new Telegraf(process.env.BOT_TOKEN);

commands.build(bot);

bot.launch();
