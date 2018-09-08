const Discord = require("discord.js")
const ms = require("ms")
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("No puedes usar este comando en mensaje privado");
  let canal = client.channels.get("487751933663248404");
  let user = message.author;
  message.delete();
    
  canal.send('Holis, espera mietras compruebo tu latencia...')
  .then(sent => {
    setTimeout(function(){
    sent.edit(`${message.author}, Termine, tu latencia es de: ${sent.createdTimestamp -  message.createdTimestamp}ms`);
    }, 4000)});
}



module.exports.help = {
  name: "ping"
}
