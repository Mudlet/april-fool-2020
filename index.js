require('dotenv').config();
const Discord = require('discord.js');
const md5 = require('blueimp-md5');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.startsWith('!code')) {
    if (msg.content.includes("I am over 18 years old")) {
      const code = md5(msg.mentions.users.first());
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('please specify `I am over 18 years old` to retrieve your token!');
    }
  }
});
