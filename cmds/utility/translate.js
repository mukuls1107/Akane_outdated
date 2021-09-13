/*const Discord = require('discord.js');
const translate = require('@vitalets/google-translate-api');

module.exports.run = async (bot, message, args) => {
    if(args.length < 1 || args[0] == "help"){
        return message.reply (`Usage: ${bot.prefix}translate <lang> <text> | to translate your text to given language.`);
    }
    const lang = args[0];
    const input = args.slice(1).join(" ");

    try {
        translate(input, { to: lang }).then(res => {
            const embed = new Discord.RichEmbed()
                .setAuthor('Translation result:')
                .setColor(bot.colors.Green)
                .addField(`Input: \`[auto]\``, `\`\`\`${input}\`\`\``)
                .addField(`Output: \`[${lang}]\``, `\`\`\`${res.text}\`\`\``);
            if(res.from.text.didYouMean) embed.setFooter("Auto-corrected");
            return message.channel.send({ embed });
        }).catch(err => {
            return message.reply(`That language isn't valid!`)
        })

    } catch (err) {
        return message.reply(`Something went wrong while doing your translation.`);
    }
}*/
const {bot, Message, RichEmbed } = require ('discord.js');
const translate = require('@iamtraction/google-translate')
module.exports.run = async(bot , message , args) => {
    try {
      const query = args.slice(1).join(" ");
    if (!query) return message.reply(`What should i translate? ex - ${bot.prefix}translate french hello`)
const arg = args[0]

    const translated = await translate(query, {to: `${arg}`});
    const embed = new RichEmbed()
    .setTitle("Translated!.")
    .addField("Your Word", `\`\`\`fix\n${query}\`\`\``)
    .addField('Selected Language', `\`\`\`fix\n${arg}\`\`\``)
    .addField('Result', `\`\`\`fix\n${translated.text}\`\`\``)
    .setColor("BLUE")
    message.channel.send(embed)

    } catch (error) {
      return message.channel.send("Your question is invalid!")
      .then(() => console.log(error));
    }
  }

module.exports.config = {
    name: "translate",
    aliases: ["trans"]
}

