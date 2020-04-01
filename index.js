require('dotenv').config();
const Discord = require('discord.js');
const md5 = require('blueimp-md5');
const _ = require('lodash');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const generatedCodes = {};

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.startsWith('!code')) {
    if (msg.content.includes("I am over 18 years old")) {
      if(!generatedCodes[msg.author]){
        const code = md5(msg.author);
        msg.reply(`your code is \`${code}\`, please keep it save and secret.`);
        generatedCodes[msg.author] = {
          code: code,
          requests: 1
        }
      }else{
        const obj = generatedCodes[msg.author];
        obj.requests++;
        msg.reply(`here is your code again: \`{obj.code}\`. You requested it {obj.requests} times. Please remember it, I'm not your mother!`)
      }
    } else {
      msg.reply('please specify `I am over 18 years old` to retrieve your token!');
    }
  } else if(msg.content.startWith('!stats')){
    const users = generatedCodes.keys()
    const requests = _.sumBy(generatedCodes.values(), obj => {
      return obj.requests;
    })
    msg.channel.send(`I generated [`)
  }
});
