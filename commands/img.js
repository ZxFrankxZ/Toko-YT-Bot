const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = (client, message, args) => {
  
  let canal = client.channels.get("487689846803136522");
  //PARA PONER UNA NUEVA IMG SIGUE LA ESTRUCTURA. UNA , EN EL ULTIMO LINK 
  //DESPUES DE " PRESIONAS ENTER Y AÑADES "Y AQUI DENTRO EL LINK"
  //LOS LINKS TIENEN QUE ESTAR TERMINADOS EN .jpg o .png
  //TAMBIEN SE PUEDEN AÑADIR GIFS
  const imgs = [
    "https://cdn.discordapp.com/attachments/487658020038508556/487675990705831937/Screenshot_20180712-13244001.png",
    "https://cdn.discordapp.com/attachments/426447909362597899/487686820856070144/Anime-Girl-With-Silver-Hair-And-Purple-Eyes-HD-Wallpaper.jpg",
    "https://www.tiposdecosas.com/wp-content/uploads/Tipos-de-anime-1.jpg",
    "https://cdn.discordapp.com/attachments/426447909362597899/487686762311974912/maxresdefault.jpg",
    "https://cdn.discordapp.com/attachments/487653171481804800/487658993049927681/Image__696751_1524975851.jpeg",
    "https://cdn.discordapp.com/attachments/487653171481804800/487690345879175168/BJMsLcOub.png",
    "https://cdn.discordapp.com/attachments/487653171481804800/487690345879175169/IMG_20180904_123513_441.jpg",
    "https://cdn.discordapp.com/attachments/487653171481804800/487690346713710592/IMG_20180902_222737.jpg",
    "https://cdn.discordapp.com/attachments/487653171481804800/487690347237867520/large-1.jpg",
    "https://cdn.discordapp.com/attachments/487656759440441345/487737749508587520/JPEG_20180907_160319.jpg",
    "https://cdn.discordapp.com/attachments/487656759440441345/487737897466986496/8dde9686c9afc357092ff13c0de13465.jpg",
    "https://cdn.discordapp.com/attachments/487656759440441345/487738169731710976/Danganronpa_V3_Bonus_Mode_Maki_Harukawa_Sprite_11.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487738203894185984/Danganronpa_V3_Halfbody_Angie_Yonaga_Sprite_12.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487738249159114752/d4e9dec7f448f313cabc7a6969d2cbd2.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487738290137464847/29dd8a716093c17821ca057b801e1afa.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487739207578812436/abrazo-anime-couple-cute-hug-Favim.com-3023069.jpg",
    "https://cdn.discordapp.com/attachments/487656759440441345/487739284686766085/BJMsLcOub.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487738290137464847/29dd8a716093c17821ca057b801e1afa.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487742939775238164/1f3c54cf027a5e8173e658f896e11deb.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743009123860500/Danganronpa_V3_Maki_Harukawa_Halfbody_Sprite_23.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743053650722816/d6be13d954344e46d286747598008fce.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743175310704640/Danganronpa_V3_Halfbody_Angie_Yonaga_Sprite_18.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743197888512017/ce229078abfdd97e56719dd767eeff35.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743225352683531/da7e2f6a4cfdc424216bb5a4580c2cfd.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743238611009547/ec425c45b07f7804405bd0f48c1892b6.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743959817388062/Danganronpa_V3_Bonus_Mode_Miu_Iruma_Sprite_25.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743959817388064/27d00bd11aa9fbefb373e400b65ac087.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743960597397504/b186fcf0fc862c46dde36a5f25286e84.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743960597397505/Danganronpa_1_Toko_Touko_Fukawa_Halfbody_Sprite_09.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743961201639424/Nagisa_Shingetsu_Halfbody_Sprite_2.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743961688047636/31e5c8159f67c712d435ea5dd756eec4.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487743961688047637/Danganronpa_V3_Bonus_Mode_Angie_Yonaga_Sprite_17.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487745859254091786/AsunaYuukiRL.jpg",
    "https://cdn.discordapp.com/attachments/487656759440441345/487745859254091788/orig.png",
    "https://cdn.discordapp.com/attachments/487656759440441345/487746168013717507/Yuuki.Asuna.full.1273347.jpg",
    "https://cdn.discordapp.com/attachments/487656759440441345/487746168521097216/Yuuki.Asuna.full.1522819.jpg"
    ]//LAS IMAGENES TIENEN QUE ESTAR DENTRO DE ESTE CORCHETE
    
  message.delete();
  canal.send({
    file: imgs[Math.floor(Math.random() * imgs.length)]
});
}

module.exports.help = {
  name: "img"
}