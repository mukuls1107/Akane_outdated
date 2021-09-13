module.exports.run =  (bot, message, [command] ) => {

    if (!command){
      return message.channel.send('Please enter a command name');
    };

    const { status, err, info } = bot.commands.reload(command);

    if (status === 'FAILED'){
      return message.channel.send( err.stack,{ code: 'xl'});
    };

    return message.channel.send(`Successfully reloaded command **${command}**`);
  }
module.exports.config = {
  name: 'reload',
  aliases: ["rr"],
  ownerOnly: true,
  group: 'owner',
  description: 'Reloads a command',
  parameters: [ 'command name/alias' ],
  examples: [
    'reload anime'
  ],
}