const Discord = require("discord.js")
const ms = require("ms")
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
    if(!user) return message.reply("Tienes que añadir a alguien")
    .then(msg => {
    msg.delete(10000)
    })
    .catch(console.error);
    let muteRole = message.guild.roles.find(a => a.name === 'Muted');
    if(!muteRole) return message.reply("No hay ningun rol llamado muted")
    .then(msg => {
    msg.delete(10000)
    })
    .catch(console.error);
    let params = message.content.split(" ").slice(1);
    let time = params[1];
    if(!time) return message.reply("No has añadido tiempo, especifica un tiempo")
    .then(msg => {
    msg.delete(10000)
    })
    .catch(console.error);
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) return message.reply("Debes añadir una razon")
    .then(msg => {
    msg.delete(10000)
    })
    .catch(console.error);
    let modlog = client.channels.get("487674030845984769")
    let nrepeat = message.guild.member(message.mentions.users.first()).roles.has(muteRole.id);

    if (nrepeat) {
      message.delete();
       message.reply('Este usuario ya esta muteado')
       .then(msg => {
         msg.delete(10000)
       })
       .catch(console.error);
    } else if (!nrepeat) {
      message.guild.member(user).addRole(muteRole.id);
      message.delete();
      const embed5 = new Discord.RichEmbed()
      .setAuthor(`TempMute a ${user.username}`, user.displayAvatarURL)
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .addField("Informacion", `**Usuario muteado:** ${user.tag}\n**Staff:** ${message.author.tag}\n**Razon:** ${reason}\n**Tiempo:** ${ms(ms(time), {long: true})}`)
      .setTimestamp();

      modlog.send({
        embed : embed5
      })
      .then(() => {
      console.log(message.author.username + " ha usado el comando $tempmute");
  })

      setTimeout(function(){
          message.guild.member(user).removeRole(muteRole.id);
          const embed6 = new Discord.RichEmbed()
          .setAuthor(`Desmuteo a ${user.username}`, user.displayAvatarURL)
          .setColor(Math.floor(Math.random() * 16777214) + 1)
          .addField("Informacion", `**Usuario desmuteado:** ${user.tag}\n**Staff:** ${message.author.tag}\n**Razon:** ${reason}\n**Tiempo:** ${ms(ms(time), {long: true})}`)
          .setTimestamp();

          modlog.send({
            embed : embed6
          })
      }, ms(time));
    }
};

module.exports.help = {
  name: "tempmute"
}
