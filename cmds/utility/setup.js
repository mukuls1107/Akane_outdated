const discord = require('discord.js')




module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have the required permission to setup the channel.");
    //let channelName = "Akane-zone"; //Arguments to set the channel name
    await message.guild.createChannel("Akane").then(channel =>{
             type: "text" //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        permissionOverwrites: [
          {
           id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS','EMBED_LINKS','ATTACH_FILES','READ_MESSAGE_HISTORY','USE_EXTERNAL_EMOJIS'], //Allow permissions
             //deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'] //Deny permissions
         }
       ]
 

    }).catch(console.error)
}
module.exports.config = {
    name: "setup",
    aliases: ["config"]
};