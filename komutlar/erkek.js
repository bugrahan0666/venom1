const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
let kayityetkili = '775021158658998323' //Yetkili
let codeariusver = '774668973076643882' //Verilecek
let codeariusal = '774669113477431346' //Alınacak
let isimön = '✦' //İsmin önüne gelecek simge,tag   

  if(!message.member.roles.cache.has(kayityetkili))  //CodeArius
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmalısınız.`);
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  let isim = args[1]
  let yaş = args[2] //CodeArius
  if (!member) return message.channel.send('Bir üye etiketlemelisin.')
  if (!isim) return message.channel.send('Bir isim yazmalısın.')
  if (!yaş) return message.channel.send('Bir yaş yazmalısın.') //CodeArius
  if (isNaN(yaş)) return message.channel.send('Yaş sadece sayı olarak kabul edilir.')
  let kayıtlımı = await db.fetch(`kayıtlıkişi_${member}`)
  let eskiismi = await db.fetch(`kayıtlıisim_${member}`)
  let toplamaisim = `${isimön} ${isim} ${yaş}` //CodeArius
  //CodeArius
  setTimeout(function(){
  member.setNickname(`${isimön} ${isim} | ${yaş}`)
  },1000)
    setTimeout(function(){
  member.roles.add(codeariusver)
  },2000)
  setTimeout(function(){
  member.roles.remove(codeariusal)
  },3000)
 //CodeArius
let toplam = await db.fetch(`kayıttoplam_${message.author.id}`) || '0'
const emoji = client.emojis.cache.find(emoji => emoji.name === "5_");

  if(kayıtlımı !== 'evet') {
  db.add(`kayıte_${message.author.id}`, 1)
  db.add(`kayıttoplam_${message.author.id}` , 1) //CodeArius
  db.set(`kayıtlıkişi_${member}`, 'evet')
  db.set(`kayıtlıisim_${member}`, toplamaisim)
  db.push(`eskiad_${member.id}`, toplamaisim)
  db.add(`toplamik_${member.id}`, 1)  //CodeArius
  let embed = new Discord.MessageEmbed()
  .setColor('f5f5f5')
  .setDescription(`<a:emoji_7:775385726580817930> Kayıt Tamamlandı!

<a:emoji_7:775385726580817930> Kayıt Edilen Kişi : ${member} 

<a:emoji_7:775385726580817930> Kullanıcıdan Alınan Rol : <@&${codeariusal}>

<a:emoji_7:775385726580817930> Kullanıcının Cinsiyeti : <@&${codeariusver}>

<a:emoji_7:775385726580817930> Kullanıcının İsmi : ${isim}

<a:emoji_7:775385726580817930> Kullanıcının Yaşı : ${yaş}

<a:emoji_7:775385726580817930> <@!${message.author.id}> **Yetkilisinin toplam** ${toplam} **Kaydı Oldu!**
`)
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setFooter('PHENTOS ❤️ FEARLESS')
  .setImage('https://media.giphy.com/media/dZCHA8SBbApAMOLvfK/giphy.gif')
  .setThumbnail("https://cdn.discordapp.com/icons/544527577768001538/a_1fa32517dd9fb1d265309255c635b2c0.gif")
message.channel.send(embed)
  }  //CodeArius
  if(kayıtlımı === 'evet') {
  db.set(`kayıtlıisim_${member}`, toplamaisim)
  db.push(`eskiad_${member.id}`, toplamaisim)
  db.add(`toplamik_${member.id}`, 1)
    let embed = new Discord.MessageEmbed()
  .setColor('f5f5f5')
  .setDescription(` **Bu kişi daha önceden de kayıt edilmiş!**

**Kullanıcı daha önce bu isimle kayıt edilmiş!** \`${eskiismi}\``)
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setFooter('PHENTOS ❤️ FEARLESS')  //CodeArius
    .setImage('https://media.giphy.com/media/dZCHA8SBbApAMOLvfK/giphy.gif')
  .setThumbnail("https://cdn.discordapp.com/icons/544527577768001538/a_1fa32517dd9fb1d265309255c635b2c0.gif")
message.channel.send(embed)
  }
};  //CodeArius

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['erkek'],
  permLevel: 0
}
exports.help = {
  name: 'e',
  description: "erkek kullanıcıları kayıt etme komutu.",
  usage: 'erkek @kişi isim yaş'
}