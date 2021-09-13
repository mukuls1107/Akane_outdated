const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  message.delete();
   let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
  let botembed = new Discord.RichEmbed()
  .setTitle("Bot Info")
  .setThumbnail(`${bicon}`)
  .setDescription(`This bot was created for the DevHub Server of Discord to have fun.`)
  .setFooter(`(Thanks for using our bot.\n\nYou can invite it from here!)[https://top.gg/bot/870174977914196058]`)
  .setURL('https://top.gg/bot/870174977914196058')
  .setColor("GREEN")
  .addField(`- Bot creators: \n`, `> DAMOÑ#8497\n> <@587517896133967884>\n\n> @Akshu✨#6552\n> <@585711075413065728>`)
  .addField(`- Bot info: \n`, `> ${bot.user.tag}\n> 870174977914196058`)
  .addField(`- Created on: \n`, `> ${bot.user.createdAt} `)
  .addField(`- Servers: \n`, `🛡 ${servsize}`)
    .addField(`- channels: \n`, `📁 ${chansize}`)
    .addField(`- Users: \n`, `🙆‍♂️ ${usersize}` )
  
  
  message.channel.send(botembed).then(m => m.delete(300000));
}

module.exports.config = {
  name: "binfo",
  aliases: ["botinfo", "developers",""]
}
