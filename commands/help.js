const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = (client, message, args) => {
  
  if(message.channel.type === "dm") return message.reply("No puedes usar este comando en mensaje privado");
  let staffRole = message.guild.roles.find(a => a.name === 'Staff');
  let canal = client.channels.get("487751933663248404");
  let user = client.users.get("487661876528939011");
  
  let CommandosStaff = new Discord.RichEmbed()
  .setAuthor(message.guild.name, user.displayAvatarURL)
  .setDescription("__***Comandos***__")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .addField("$mute", "Silencia a un usuario.\n__***Uso***__ => $mute @usuario Razon.", false)
  .addField("$tempmute", "Silencia temporalmente a un usuario.\n__***Uso***__ => $tempmute @usuario Tiempo Razon.", false)
  .addField("$unmute", "Quitar silencio a un usuario.\n__***Uso***__ => $unmute @usuario.", false)
  .addField("$clear", "Borra X mensajes.\n__***Uso***__ => $clear Cantidad", false)
  .addField("$grupo", "Usa este comando para ver la informacion de este Grupo.\n__***Uso***__ => $grupo", false)
  .addField("$canal", "Muestra el canal de `NightcoreTokoYT`.\n__***Uso***__ => $canal", false)
  .addField("$img", "Envia una imagen aleatoria a <#487689846803136522>.\n__***Uso***__ => $img", false)
  .addField("$ping", "Puedes usarlo para comprobar tu latencia.\n__***Uso***__ => $ping")
  .setTimestamp();
  
  let CommandosUser = new Discord.RichEmbed()
  .setAuthor(message.guild.name, user.displayAvatarURL)
  .setDescription("Comandos")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .addField("$grupo", "Usa este comando para ver la informacion de este Grupo.\n__***Uso***__ => $grupo", false)
  .addField("$canal", "Muestra el canal de `NightcoreTokoYT`.\n__***Uso***__ => $canal", false)
  .addField("$img", "Envia una imagen aleatoria a <#487689846803136522>.\n__***Uso***__ => $img", false)
  .addField("$ping", "Puedes usarlo para comprobar tu latencia.\n__***Uso***__ => $ping")
  .setTimestamp();
  
  if(message.guild.member(message.author).roles.has(staffRole.id)) {
      message.delete();
      canal.send(CommandosStaff)
      .then(msg => {
      msg.delete(20000)
    });
  } else if (!message.guild.member(message.author).roles.has(staffRole.id)) {
      message.delete();
      canal.send(CommandosUser)
      /*.then(msg => {
      msg.delete(100000)
      });*/
  }
}

module.exports.help = {
  name: "help"
}
