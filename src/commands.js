const actions = require('./actions');

const commands = {
  start: actions.start,
  help: actions.help,
};

const build = (bot) => {
  Object.keys(commands).forEach(name => {
    bot.command(name, commands[name]);
  });
};

module.exports = {
  build,
};