const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready to give @Goldminer127#6374 some cash!’);
});

client.on('message', message => {
    if (message.content === 'That's a floating tree... Did you guys just turn off gravity or something?') {
    	message.reply(‘```Congratulations! @Goldminer127#6374 now has $2 more in his bank account.’);
  	}
});

client.login(process.env.BOT_TOKEN);
