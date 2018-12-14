const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://78.media.tumblr.com/10b366f294d47b40d857d6e47872d0dc/tumblr_ntubqoYYsF1sqwlqgo3_250.gif")
  .setTitle("<a:poliss:502486674844942336>Komutlar <a:polis:502486675449184266> ")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("<a:wavegif:502481554379898881> **Hoşgeldin Mesajı Aktif Etme** <a:wavegif:502481554379898881>",  ` .kur Komutuyla Gerekli Kanalları Oluşturun.`)
    .addField(":headphones: **Müzik komutları eklendi** <:asbayraklari:502174044871720961> ", `.çal <müzik>`) 
  .addField("<a:hyperPoggers:502482793155133440> **Eğlence komutları için ** **[.1]**", `Eğlence Komutlarını Gösterir. (.eğlence) `)
  .addField("<a:hyperPoggers:502482793155133440> **Eğlence komutları 2 için ** **[.4]**", `Eğlence Komutlarının Devamını Gösterir. (.eğlence2) `) 
  .addField("<a:frograinbow:505984020790902785> **Yetkili komutları için [.2]**", `Yetkili Komutlarını Gösterir. (.yetkili) `) 
  .addField("<:tr:502174034675499058> **Ana komutlar için** **[.3]**", `Ana Komutları Gösterir. (.anakomutlar) `)
  .addField("**Komutlar Hakkında Daha Fazla Bilgi Almak İçin** <a:WeeWoo:502333005449134080>", `http://sakir.sitem.xyz/`)
  .addField("**Discord Sunucumuz:**<a:blobjoining:502485228317835265>",`https://discord.gg/bamkeg7`)
  .addField("**Tavsiyelerizi Bildirmek İçin `.tavsiye` Komutunu Kullanınız.** <:tr:502174034675499058>",`https://www.youtube.com/c/karmakarisiktv27`)
   
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
    message.react('✅')
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
