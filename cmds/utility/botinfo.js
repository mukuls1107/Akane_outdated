const Discord = require("discord.js");
//const errors = require("../utils/errors.js");
const moment = require("moment");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  message.delete();
  let botembed = new Discord.RichEmbed()
  .setTitle("Bot Info")
  .setDescription(`This bot was created for the DevHub Server of Discord to have fun.`)
  .setFooter(`Thanks for using our bot.`)
  .setColor("GREEN")
  .addField(`- Bot creators: \n`, `> DAMOÑ#8497\n> <@587517896133967884>\n\n> @Akshu✨#6552\n> <@585711075413065728>`)
  .addField(`- Bot info: \n`, `> ${bot.user.tag}\n> 870174977914196058`)
  .addField(`- Created on: `, `> ${moment.utc(bot.user.createdAt).format("dddd, MMMM Do YYYY")} (${ms(Date.now()- bot.user.createdAt, {long: true})})`)
  
  message.channel.send(botembed).then(m => m.delete(5000));
}

module.exports.config = {
  name: "binfo",
  aliases: ["botinfo", "developers",""]
}
