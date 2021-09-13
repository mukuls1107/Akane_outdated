const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => { 

////////\n///////////////////////////////////////////////////////////////////////////////////////////////////

    let link = "https://discord.com/api/oauth2/authorize?client_id=870174977914196058&permissions=137976212560&scope=bot";

    let embed = await new Discord.RichEmbed()
        .setColor(bot.colors.Green)
        .setTitle("**Akane** Links")
        .setDescription(`Invite the bot to your server [here](${link})\nJoin our discord server [here](https://discord.gg/sqTRV843GH)\n`)
    message.channel.send(embed);
}

module.exports.config = {
    name: "invite",
    aliases: []
}