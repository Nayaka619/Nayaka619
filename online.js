const Discord = require('discord.js')

const client = new Discord.Client



client.once('ready', () => {
  console.log(You Have Successly Online Your Bot);
});



client.login('Your Client ID')
