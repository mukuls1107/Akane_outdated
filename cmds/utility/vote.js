const Discord = require("discord.js");
const fs = require("fs");
const mongoose = require("mongoose");
const dbl = require("dblapi.js")
const settings = require("./../../settings.json")
module.exports.run = async (bot, message, args) => { 

////////\n///////////////////////////////////////////////////////////////////////////////////////////////////

//message.channel.send("We'll comply this command in the next patch , when Akane we'll be verified on the Top.gg/Bot list");

/*if(message.author.id != '587517896133967884')message.channel.send("We'll comply this command in the next patch , when Akane we'll be verified on the Top.gg/Bot list");*/
    let link = "https://discord.com/oauth2/authorize?client_id=870174977914196058&permissions=137976212560&scope=bot";
    let field = `- You get 10 'spawn' uses\n- Your chances to get Golden Sleeves on 'claim' will be upgraded!\nTo claim your rewards, vote for me on the link avobe and use ${bot.prefix}vote again.\nIt might take up to 5 minutes to detect your vote so please be patient.`
    // Check if user voted in the last 12 hours
    if(await bot.dbl.hasVoted(message.author.id)){
        let user = await bot.userinventories.findOne({ userID: message.author.id });
        // Create user inventory if it doesn't exist
        if(!user){
            date = new Date();
            date.setHours(date.getHours() - 13);
            newUser = new bot.userinventories({
                _id: mongoose.Types.ObjectId(),
                userID: message.author.id,
                getUses: 1,
                spawnUses: 10,
                sleeves: 1,
                goldSleeves: 0,
                voteTime: date,
                voteUses: false,
                patreon: false,
                patreonBonuses: 0,
                leveling: "None"
            });
            await newUser.save();
            user = await bot.userinventories.findOne({ userID: message.author.id });
            message.reply(`Welcome to Waifun! You got a free extra **Sleeve**, use Sleeves to catch characters you want, you get Sleeves by either using 'claim' every 3 hours or grabbing them when they randomly drop. You can now start using 'claim' to get your Sleeves and 'spawn' to spawn a random character, object or event. Good Luck!`)
        }

        // Check if 12 hours passed
          if(user.get('voteTime')-new Date < 12){
            // Give user the prize
            date = new Date();
            date.setHours(date.getHours() + 12);

            await bot.userinventories.updateOne({ userID: message.author.id }, 
                { $set: 
                    { 
                        spawnUses: 10,
                        voteTime: date,
                        voteUses: true
                    }
                })
                return message.reply("Thank you for voting! Your 'spawn' uses were set to 10! Your chances to get Golden Sleeves on 'claim' were upgraded!");
        }
         
        }


        // Check if user has already claimed the prize
        else if(user.get('voteUses') === true){
            let nextInterval = user.get('voteTime');
            let date = new Date();
            let time = Math.abs(nextInterval.getTime() - date.getTime());
            let seconds = Math.ceil(time / 1000);
            let minutes = seconds/60;
            let hours = minutes/60;
    
            already = 'You have already gotten your rewards for voting in the last 12 hours.\nTime Remaining:';

            if(hours<1){
                field = await `${already} **${minutes.toString().split(".")[0]} minutes**`
            }else if(hours<2){
                if (minutes-60<10) field = await `${already} **${hours.toString().split(".")[0]}:0${(minutes-60).toString().split(".")[0]} hours**`
                else field = await `${already} **${hours.toString().split(".")[0]}:${(minutes-60).toString().split(".")[0]} hours**`
            }else if(hours<3){
                if (minutes-120<10) field = await `${already} **${hours.toString().split(".")[0]}:0${(minutes-120).toString().split(".")[0]} hours**`
                else field = await `${already} **${hours.toString().split(".")[0]}:${(minutes-120).toString().split(".")[0]} hours**`
            }else if(hours<4){
                if (minutes-180<10) field = await `${already} **${hours.toString().split(".")[0]}:0${(minutes-180).toString().split(".")[0]} hours**`
                else field = await `${already} **${hours.toString().split(".")[0]}:${(minutes-180).toString().split(".")[0]} hours**`
            }else if(hours<5){
                if (minutes-240<10) field = await `${already} **${hours.toString().split(".")[0]}:0${(minutes-240).toString().split(".")[0]} hours**`
                else field = await `${already} **${hours.toString().split(".")[0]}:${(minutes-240).toString().split(".")[0]} hours**`
            }else if(hours<6){
                if (minutes-300<10) field = await `${already} **${hours.toString().split(".")[0]}:0${(minutes-300).toString().split(".")[0]} hours**`
                else field = await `${already} **${hours.toString().split(".")[0]}:${(minutes-300).toString().split(".")[0]} hours**`
            }else if(hours<7){
                if (minutes-360<10) field = await `${already} **${hours.toString().split(".")[0]}:0${(minutes-360).toString().split(".")[0]} hours**`
                else field = await `${already} **${hours.toString().split(".")[0]}:${(minutes-360).toString().split(".")[0]} hours**`
            }else if(hours<8){
                if (minutes-420<10) field = await `${already} **${hours.toString().split(".")[0]}:0${(minutes-420).toString().split(".")[0]} hours**`
                else field = await `${already} **${hours.toString().split(".")[0]}:${(minutes-420).toString().split(".")[0]} hours**`
            }else if(hours<9){
                if (minutes-480<10) field = await `${already} **${hours.toString().split(".")[0]}:0${(minutes-480).toString().split(".")[0]} hours**`
                else field = await `${already} **${hours.toString().split(".")[0]}:${(minutes-480).toString().split(".")[0]} hours**`
            }else if(hours<10){
                if (minutes-540<10) field = await `${already} **${hours.toString().split(".")[0]}:0${(minutes-540).toString().split(".")[0]} hours**`
                else field = await `${already} **${hours.toString().split(".")[0]}:${(minutes-540).toString().split(".")[0]} hours**`
            }else if(hours<11){
                if (minutes-600<10) field = await `${already} **${hours.toString().split(".")[0]}:0${(minutes-600).toString().split(".")[0]} hours**`
                else field = await `${already} **${hours.toString().split(".")[0]}:${(minutes-600).toString().split(".")[0]} hours**`
            }else if(hours<12){
                if (minutes-660<10) field = await `${already} **${hours.toString().split(".")[0]}:0${(minutes-660).toString().split(".")[0]} hours**`
                else field = await `${already} **${hours.toString().split(".")[0]}:${(minutes-660).toString().split(".")[0]} hours**`
            }
        }
    

    // Send message to vote
  let embed = await new Discord.RichEmbed()
        .setColor(bot.colors.Green)
        .setTitle("Akane Links")
        .setDescription(`Vote for Akane [here](https://top.gg/bot/870174977914196058)\nJoin our discord server [here](https://discord.gg/sqTRV843GH)\nInvite the bot to your server [here](${link})`)
        .addField("Voting rewards:", field)
    message.channel.send(embed);
}
/*
dbl.webhook.on('vote', async vote => {
   // This will log the whole vote object to the console
   console.log(vote)
   const webhook = new Discord.WebhookClient("886498237261959239","nFnUXguVZbfFLwvoSL1ukfV5BeV2h-V5PrQn6NEB-5mO1qQ3m1LLseSw4fAiAfBl1Qy")
  await webhook.send(`${vote.user} just voted!`)
})
  */



module.exports.config = {
    name: "vote",
    aliases: ["v"]
}
