const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  let Staffs = message.guild.members.filter(member => { 
        return member.roles.find(a => a.name === 'Staff') && !member.roles.find(a => a.name === 'Bot');
    }).map(member => {
        return member.user.username;
    })
  let canal = client.channels.get("487751933663248404");
  message.delete();
  canal.send({embed: {
    color: 0x00c1ff,
    description: `**Nombre:**\n${message.guild.name}
    \n**Cantidad de usuarios**:\n${message.guild.memberCount}
    \n**Dueño de discord:**\n${message.guild.owner}
    \n**Nivel de verificacion:**\n${message.guild.verificationLevel}
    \n**Staff:**\n${Staffs.join("\n")}`}})
  .then(() => {
      console.log(message.author.username + " ha usado el comando $discord");
  });
}

module.exports.help = {
  name: "grupo"
}