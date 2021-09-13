const { RichEmbed } = require('discord.js')

module.exports.run =  async(bot, message, args) => {
        let days = Math.floor(bot.uptime / 86400000);
        let hours = Math.floor(bot.uptime / 3600000) % 24;
        let minutes = Math.floor(bot.uptime / 60000) % 60;
        let seconds = Math.floor(bot.uptime / 1000) % 60;
    
        const upt = new RichEmbed()
        .setColor('#f56942')
        .setAuthor("Uptime Of " + bot.user.username)
        .setImage(bot.avatarURL)
        .setDescription(`
**Days - ${days}d**
**Hours - ${hours}h**
**Minutes - ${minutes}m**
**Seconds - ${seconds}s**`)
    .setFooter("Uptime | Requested By - " + message.author.username, message.author.avatarURL)
       await message.channel.send(upt);  
    }
module.exports.config = {
    name: "uptime",
    description: 'To Get My Uptime.',
    category: 'Konvex',
    timeout: '5',
    aliases: ['up'],
}