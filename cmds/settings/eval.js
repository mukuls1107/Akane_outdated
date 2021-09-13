const Discord = require('discord.js')

const { bot, RichEmbed } = require('discord.js');
const { inspect } = require('util')
 
module.exports.run = async (bot, message, args) => {
        if(message.author.id !== '587517896133967884') return message.channel.send("sorry, this command is only for the developer")

        const command = args.join(" ");
        if(!command) return message.channel.send("you must write a command ")

        try {
            const evaled = eval(command)
            let words = ["token", "destroy"]
            if(words.some(word => message.content.toLowerCase().includes(word))){
                return message.channel.send("Those words are blacklisted!")
            }
            const embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("correctly evaluated")
            .addField(`**Type:**`, `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true)
            .addField("**Evaluated in:**", `\`\`\`yaml\n${Date.now()-message.createdTimestamp} ms\`\`\``, true)
            .addField("**Entrance**", `\`\`\`js\n${command}\`\`\``)
            .addField("**Exit**", `\`\`\`js\n${inspect(evaled, {depth: 0})} \`\`\``)

            message.channel.send(embed)

        }catch (error) {
            const embedfailure = new Discord.RichEmbed()
            .setColor("RED")
            .addField(`Entrance`, `\`\`\`js\n${command}\`\`\``)
            .addField(`Error`, `\`\`\`js\n${error}\`\`\` `)

            message.channel.send(embedfailure)
        }
    };
    module.exports.config = {   name: 'eval',
    aliases: [""],
    description: 'evaluates any string as javascript code and executes it.',
    category: "Utility",
    cooldown: 1,}
 