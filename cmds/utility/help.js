const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => { 

////////\n///////////////////////////////////////////////////////////////////////////////////////////////////

    let embed = new Discord.RichEmbed()
        .setColor(bot.colors.Green)
        .setTitle("Akane Help - Commands")
        .setDescription("Join our Discord channel by [clicking here](https://discord.gg/sqTRV843GH)")
        .addField("🔘 Collections",
        "        ```CSS\n>> claim\n>> spawn\n>> info\n>> level\n>> favorite\n>> franch\n>> collection\n>> inventory\n>> give\n>> trade\n>> burn\n>> annihilate\n>> delete\n>> add\n>> obj\n>> use```" ,true)
        .addField("Description",
        "        ```Get a sleeve (3 hours cd).\nSpawn a character, object, event.\nInfo of character, object, event.\nTrain a character to level up.\nSet a character as favorite.\nCheck a franchise's info.\nShows a .\nShows a user inventory.\nGift a character.\nTrade characters.\nDispose of a character.\nAnnihilate your collection.\nDelete your inventory.\nAdds a character to **Akane**.\nSee objects info.\nUse an object```",true)
        .addField("😂 Fun",
        "        ```CSS\n>> say\n>> wiki\n>> roll```" ,)
        .addField("Description",
        "        ```Makes the bot say something for u.\nSearch wiki pages.\nRoll a d&d die.```" , )
        .addField("Actions",
        "```CSS\n>> Hug\n>> Slap\n>> kill\n>> pat```", true)
        .addField("Description",
        "```CSS\nPerform an Hug action.\nSlap someone.\nKill someone/ take revenge ,lmao\nPat someone! uwu```", true)
        .addField("🖼 Image",
        "        ```CSS\n>> avatar\n>> image\n>> gif\n>> meme\n>> lizard```" , )
        .addField("Description",
        "        ```Shows a user's avatar.\nSearch google images.\nSearch gifs on giphy.\nGet a meme from reddit.\nRandom lizard pic.```", )
       /* .addField("🖼 Image-Manipulation",
        "        ```CSS\nimpact\ninvert\ngray\ndf\nmagik\nyoutube\nblur\ncycle\npaint\nswirl\ncrop```", true)
        .addField("---------------------Description---------------------",
        "        ```Impact meme generator\nInvert last picture\nBlack'n'White last picture\nDeep Fry last picture\nDeform a picture\nTransform picture to yt video\nBlur last picture\nCycle pixels last picture\nPaint effect last picture\nSwirl last picture\nCrop picture for **Akane** use```", true)
        .addField("---------------------Description---------------------",
        "        ```Look for hentai on a random site\nLook for a hentai pic on danbooru\nLook for a hentai pic on gelbooru\nLook for a hentai pic on rule34\nLook for a hentai pic on konachan\nLook for a hentai pic on yandere\nLook for a hentai pic on xbooru\nLook for hentai'nt on safebooru\nLook for a hentai pic on tbib```", true)*/
        .addField("🛠 Utility",
        "        ```CSS\n>> help\n>> invite\n>> vote\n>> userinfo\n>> ping\n>> pong\n>> calc\n>> translate```" )
        .addField("Description",
        "        ```Shows you help Section.\nGet invitation links.\nVote for me and get prizes.\nShows a user's info.\nPing.\nPong.\nShows character categories.\nMake a calculation\nTranslate a text.```" , )
        .addField("⚙ Settings",
        "        ```CSS\n>> channel\n>> block\n>> prefix```",true  )
        .addField("Description",
        "        ```Set channel, use 'channel help'.\nBlock a channel.\nChange prefix.```",true )
        .setFooter(`Version 1.0.0 'The fun has arrived!" (50 commands) - You can use ${bot.prefix}<command> help on every command for more detailed info and syntax definitions`);
    if(args[0] === "here") return message.channel.send(embed);
    else message.channel.send(embed);
}


module.exports.config = {
    name: "help",
    aliases: ["h"]
}