const Discord = require("discord.js")
module.exports.run = (client, msg, suffix) => {
  if(msg.channel.type === "dm") return msg.reply("No puedes usar este comando en mensaje privado");
  let staffRole = msg.guild.roles.find(a => a.name === 'Staff');
  if(!msg.guild.member(msg.author).roles.has(staffRole.id)) return msg.reply("No tienes permisos.")
  if (!suffix) {
  var newamount = "2";
} else {
  var amount = Number(suffix);
  var adding = 1;
  var newamount = amount + adding;
}
let messagecount = newamount.toString();
msg.channel
  .fetchMessages({
    limit: messagecount
  })
  .then(messages => {
    msg.channel.bulkDelete(messages);
    // Logging the number of messages deleted on both the channel and console.
    msg.channel
      .send({embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        description: "**Mensajes eliminados correctamente. \nTotal de mensajes eliminados, incluido el commando: " +
          newamount + "**"

      }})
      .then((message) => {
      console.log(message.author.username + " ha usado el comando $clear");
      message.delete(5000);
    });
    console.log(
      "Mensajes eliminados correctamente. \nTotal de mensajes eliminados, incluido el commando: " +
        newamount
    );
  })
  .catch(err => {
    console.log("Error al hacer el Bulk Delete");
    console.log(err);
  });

}


module.exports.help = {
  name: "clear"
}
