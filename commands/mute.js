const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("No puedes usar este comando en mensaje privado");
  let staffRole = message.guild.roles.find(a => a.name === 'Staff');
  if(!message.guild.member(message.author).roles.has(staffRole.id)) return message.reply("No tienes permisos.")
  .then(msg => {
  msg.delete(10000)
  })
  .catch(console.error);
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("No tengo permisos")
  .then(msg => {
  msg.delete(10000)
  })
  .catch(console.error);
  let usermentioned = message.mentions.members.first();
  if(usermentioned.roles.has(staffRole.id)) return message.reply("no puedes sancionar a un staff")
  .then(msg => {
  msg.delete(10000)
  })
  .catch(console.error);
  let user = message.mentions.users.first();
  let muteRole = message.guild.roles.find(a => a.name === 'Muted');
  if(!muteRole) return message.reply("No hay ningun rol llamado muted")
  .then(msg => {
  msg.delete(10000)
  })
  .catch(console.error);
  let reason = message.content.split(" ").slice(2).join(" ");
  let modlog = client.channels.find(a => a.name === 'mod-log')

  if(!modlog) return message.reply("No se a detectado ningun canal de texto llamado mod-log")
  .then(msg => {
  msg.delete(10000)
  })
  .catch(console.error);
  if(message.mentions.users.size < 1) return message.reply("Debes añadir a alguien")
  .then(msg => {
  msg.delete(10000)
  })
  .catch(console.error);
  if(!reason) return message.reply("Debes añadir una razon")
  .then(msg => {
  msg.delete(10000)
  })
  .catch(console.error);

   if (message.guild.member(message.mentions.users.first()).roles.has(muteRole.id)) {
     message.delete();
      return message.reply('Este usuario ya esta muteado')
             .then(msg => {
             msg.delete(10000)
             })
             .catch(console.error);

   } else if (!message.guild.member(message.mentions.users.first()).roles.has(muteRole.id)) {
      message.guild.member(user).addRole(muteRole.id);
      message.delete();
   }

  const embed2 = new Discord.RichEmbed()
  .setAuthor(`Mute a ${user.username}`, user.displayAvatarURL)
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .addField("Informacion del mute", `**Usuario muteado:** ${user.tag}\n**Staff:** ${message.author.tag}\n**Razon:** ${reason}`)
  .setTimestamp();
  modlog.send({
    embed : embed2
  })
  .then(() => {
      console.log(message.author.username + " ha usado el comando $mute");
  })
};

module.exports.help = {
  name: "mute"
}
