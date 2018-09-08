const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  let youtube = "https://www.youtube.com/channel/UCyk5mt9wN7ROHssDoWsEhkg"
  let canal = client.channels.get("487751933663248404");
  message.delete();
  /*message.channel.send({embed: {
    color: 0x00c1ff,
    description: `\n**Canal de YT:**\n${youtube}`}})
  .then(() => {
      console.log(message.author.username + " ha usado el comando $youtubers");
  });*/
  const yt = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .addField("**Canal**", youtube, false)
  .setThumbnail("https://yt3.ggpht.com/a-/AN66SAwnbvalPVMXG8HGCmAAN0Jc6TWOyz_TgMlPqw=s288-mo-c-c0xffffffff-rj-k-no");
  
  canal.send(yt);
}

module.exports.help = {
  name: "canal"
}
