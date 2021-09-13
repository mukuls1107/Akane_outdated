const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
  const dcription = `${bot.guilds
            .sort((a, b) => b.memberCount - a.memberCount)
            .map(r => r)
            .map((r, i) => `${i + 1} - ${r.name} | ${r.memberCount} Members | ${r.id}`)
            .slice(0, 100)
            .join("\n")}`;
            const split = dcription.match(/[\s\S]{1,2033}/g);
        if(message.author.id !== "587517896133967884" ) return message.reply(`This Command Is Only Available To My Owner :D`)
for(let i = 0; i<split.length; i++){
        let description = new Discord.RichEmbed()
          .setTitle(`Total Servers - ${bot.guilds.size}\n\n`) 
          .setColor("RANDOM")
          .setDescription(split[i]);


       await message.channel.send(description) // Async context needed to use 'await.'
    .catch(console.error); 

        //End

    };
};
module.exports.config = {
    name: `list`,
    aliases: ["l"],
    usage: `list-servers`,
    category: 'Owner',
    permisReq: 'Bot Owner',
    description: 'Shows All The Server\'s Name, Member Count And IDs In Which Bot Is. ',
}