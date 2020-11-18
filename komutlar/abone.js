const Discord = require("discord.js"),
client = new Discord.Client();                
const config = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
if(!message.member.roles.cache.get("775021158658998323") && !message.member.roles.cache.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField(`Yetersiz Yetki` , `Yeterli Yetkiniz Olmadığı için Bu Komutu Kullanamazsınız`).setColor("RANDOM").setTimestamp()).then(m => m.delete(5000));
  
  else {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args.slice(0).join(" "));
      if(!member) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').addField("Hatalı Kullanım",`Lütfen Bir Kullanıcı Etiketleyiniz`).setFooter(message.author.username, message.author.avatarURL)).then(m => m.delete(10000));
  member.roles.add("775313479375519744")


    const embed = new Discord.MessageEmbed()
    .setTitle("VENOM CODE | ABONE ROL VERİLDİ")
    .setColor("RANDOM")
    .addField("Abone Rolü Verildi", `<@!${member.id}> Abone olduğunuz için teşekkür ederiz.`)
    .setFooter('Venom / Developed By Phentos')
    message.channel.send(embed)
  }
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['abone'],
  permLevel: 0
}
exports.help = {
  name: 'abone',
  description: "abone rolü verir.",
  usage: 'abone @kişi '
}