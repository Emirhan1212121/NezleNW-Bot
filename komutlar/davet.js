const Discord = require('discord.js');
const client = new Discord.Client();
//Bu komutun yapımcısı Canavar07#8595 'dir
exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('İşte Davet Linkim: https://discordapp.com/oauth2/authorize?client_id=487197160237170688&scope=bot&permissions=805308478');
    return message.author.sendEmbed(pingozel)
};
//Bu komutun yapımcısı Mordecai#3303 'dir
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};
//Bu komutun yapımcısı Mordecai#3303 'dir
exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
