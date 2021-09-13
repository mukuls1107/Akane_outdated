const Discord = require("discord.js");
const parser = require('cron-parser');
const mongoose = require("mongoose");
const claimedRecently = new Set();

module.exports.run = async (bot, message, args) => {
let user = await bot.userinventories.findOne({ userID: message.author.id})
  
   let commonSleeve = "<:Gold:880095788552843355>";
    let goldenSleeve = "<a:ax_Bow:880095051814953031>";
     let goldSleeve = 5;
   let rewards = `${commonSleeve} A **Sleeve**`;
let get = user.get('getUses')-1
if(message.author.id === "587517896133967884"){
   await bot.userinventories.updateOne({ userID: message.author.id }, 
    { $set: 
        { 
            getUses: get,
            sleeves: user.get('sleeves')+200,
            goldSleeves: user.get('HaruSleeves')+goldSleeve
        }
    })
   let embed = new Discord.RichEmbed()
    .setColor(bot.colors.Green)
    .setTitle(`${message.author.username} Claims`)
    .setDescription(`You Got: ${rewards}`)
    message.channel.send(embed);
}

}




module.exports.config = {
    name: "ok",
    aliases: [""]
}