module.exports.run = async(bot,message,args)=>{
    if(message.author.id != "587517896133967884")return;
    message.channel.send("!claim")
}
module.exports.config ={
  name:'sd',
  aliases:["me"]
}