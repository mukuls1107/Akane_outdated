const Anime_Images = require('anime-images-api')
const API = new Anime_Images()
const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    let { image } = await API.sfw.hug()
   const bed = new Discord.RichEmbed()
   .setTitle("UwU")
   .setImage(image) 
   .setFooter(`Requested by: ${message.author.username}`)
    message.channel.send(bed)
    }
    

module.exports.config ={
  name: "hug",
  aliases: [""]
}