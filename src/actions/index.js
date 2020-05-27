const start = (ctx) => {
  let message = 'Halo!';
  message += '\nPerkenalkan, saya adalah penjaga grup @tamankodekode.'
  message += '\nGunakan /help untuk melihat bantuan.'
  ctx.reply(message);
};

const help = (ctx) => {
  let message = 'Yang dapat Anda perintahkan kepada saya.';
  message += '\n/help - melihat pesan ini'
  ctx.reply(message);
};

module.exports = {
  start,
  help,
};
