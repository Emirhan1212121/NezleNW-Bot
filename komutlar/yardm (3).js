const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Bot Hakkında Kısa Bilgi**\n\n\n' + '``-`` nt!kurucu Yazarak Botun Kurucusunu Görebilirsiniz.  \n``-`` Sunucunuzda Resimli Giriş Çıkışın Çalışması İçin ``giriş-çıkış`` Adında Bir Metin Kanalı Olmalıdır.\n``-`` nt!otorol = Otorol ayarlamak için etiketlemeden direk rolün ismini yazın!!! \n``-`` Ban,kick,uyar gibi komutları kullanabilmeniz için `ceza-takip-listesi` adlı bir metin kanalı oluştumanız gerek.\n``-`` Eğer nt!pubg/nt!lol/nt!csgo Komutlarını Kullanmak istiyorsanız ``PUBG Gamer - CS:GO Gamer - LOL Gamer `` adlı roller oluşturmanız lazım.',
              '**Yenilikler**\n\n\n' + '``-``  nt!canlıdestek = Botun Sahibinden Bot İçin ``Destek Talebinde`` Bulunursun.\n``-`` nt!rolinfo = Kullanım şekli nt!rolinfo ROLÜN İSMİ etiketlemeyin! Rol hakkında bilgi verir. \n``-``  nt!öneri = Sizin önerilerinizi Botun kurucusuna iletir! \n``-`` nt!pubg / nt!csgo / nt!lol =Komutlarını yazdığında kişiye bu rollerdeden ``PUBG Gamer - CS:GO Gamer - LOL Gamer `` verir. \n``-``  nt!destekhattım = Size botun destek hattını gönderir. ',
              '**Kullanıcı Ve Eğlence**\n\n\n' + '``-``  nt!8ball = Bir soru sorun oda size yanıtını versin! \n``-`` nt!inverst = Avatarınızdaki renkleri ters çevirir.\n``-``nt!kasaaç = CS:GO Kasası açar.\n``-`` nt!afk = Afk odasına yönlendirilirsiniz.\n``-`` nt!sunucubilgi = Sunucu Hakkında Bilgi Verir. \n``-``  nt!emojiyazı = Yazdığınız Metni Emojili Bir Şekilde Yazar.\n``-`` nt!öp = Etiketlediğiniz kişiyi öper :heart: .\n``-`` nt!sigaraiç = Sigara içersiniz. \n``-`` nt!ateşet = Birisine Ateş Edersiniz.\n``-`` nt!google = Googlede İstediğnizi aratır ve sonuçları size verir. \n``-`` nt!hackle = Bot Sizi Hackler.  \n``-``  nt!döviz = Euro Ve Doların ``Alış-Satış`` Fiyatını Gösterir. \n``-``  nt!atatürk <sayı> = Atatürkün Rastgele Bir Resmini Atar. \n``-``  nt!avatar = Kullanıcı Resminizi Atar. \n``-``  nt!aşkölçer = Etiketlediğiniz kişiyle aranızdaki aşk seviyesini ölçer.    \n``-`` nt!çekiliş = rastgele bir çekiliş yapar.  \n``-`` nt!havadurumu = Arattığınız şehhrin havadurumunu gösterir.  \n``-``  nt!mesajküçült = Yazdığınız mesajı küçülterek yazar. \n``-``  nt!nitroefekt = Avatarınızı nitro efekti ile gösterir.  \n``-``  nt!roller = Botun bulunduğu sunucudaki rolleri gösterir. \n``-``  nt!servericon = Sunucunun ikonunu gösterir.  \n``-``  nt!slots = Slot oynatır. \n``-``  nt!şifre = Yazdığınız rakama göre rastgele bir şifre oluşturur.  \n``-``  nt!yardım = Komutları gösterir. \n``-``  nt!yazıtura = Yazı Tura oynatır. \n``-``  nt!anket = Belirlediğiniz konu hakkında anket yapar. \n``-``  nt!yaz = Bota istediğiniz şeyi yazdırır. \n``-`` nt!hastebin = Hastebine kod/cümle yüklersiniz. \n``-`` nt!hesapla = Matematik işlemini çözer. \n``-`` nt!1vs1 <@kullanıcı> <@kullanıcı> = Aralarında savaş yaptırırsınız.  \n``-`` nt!wasted = avatarınıza wasted efekti verir.',
              '**Bot Bilgi ve Admin Komutları**\n\n\n' + '``-``  nt!davetlinkim = Bot İle İlgili Bağlantıları Görürsünüz.\n``-``nt!antispam = Olası bir spama karşı önlem alır.\n``-`` nt!geçiçisustur = Kişiyi geçici olarak susturur. \n``-`` nt!rolinfo = Etiketlediğiniz rol hakkında sizi bilgilendirir. \n``-``nt!kullanıcıbilgim = Komutu yazan kişinin bilgilerini verir. \n``-``  nt!ping = Botun Pingini Gösterir.\n``-`` nt!bottanıt = Botumuzu Tanıtır. \n``-``nt!geçicisustur = Etiketlediğiniz kişiyi susturur. \n``-``  nt!destekhattım = Botun destek hattını gösterir. \n``-``  nt!internetsitesi = Botun internet sitesini gösterir. \n``-``  nt!başvuru = Ekibe katılmanız için başvurunuzu yapar. \n``-`` nt!ban = kişiyi sunucudan sınırsız olarak yasaklar. \n``-`` nt!unban = Kişinin banını kaldırır. \n``-``  nt!reklamtara = Sunucuda kim oynuyor yerinde reklam yapıyorsa gösterir. \n``-``  nt!kick = etiketlediğiniz kişiyi sunucudan atar. \n``-``  nt!linkengelle = Sunucuya atılan linkleri engeller. \n``-`` nt!temizle = Belirttiğiniz miktarda mesaj siler. \n``-`` nt!ses-kanal-aç = Bot yeni bir ses kanalı açar. \n``-`` nt!yavaşmod [1den 100e kadar] = Açtığınızda 1den 100e kadar süre tutabilirsiniz.Kapatmak içinde nt!yavaşmod 0 yazarak kapatabilirsiniz.\n``-`` nt!yazı-kanal-aç =Verdiğiniz isme göre bir kanal oluşturur.',
              '**Müzik Komutları**\n\n\n' +  '``-`` \n``-`` !!al = Belirttiğiniz şarkıyı çalar..\n``-`` nt!duraklat = Şarkıyı durdurur..\n``-`` nt!devam = Şarkıyı devam ettirir..\n``-`` nt!geç = Bir sonraki şarkıyı çalar.\n``-``  nt!ses <1-50> = Sesi belirttiğiniz miktara göre ayarlar.\n ``-`` nt!çalan = Çalan şarkıyı gösterir.\n``-``  nt!ayrıl = Bot odadan ayrılır.',
            ];
              let page = 1;

              const embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
                .setFooter(`Sayfa ${page} / ${pages.length}`)
                .setDescription(pages[page-1])
              message.channel.send(embed).then(msg => {
            
              msg.react('⬅')
              .then(r => {
                msg.react('➡')
            
                  //Filter
                  const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
                  const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
            
                  const backwards = msg.createReactionCollector(backwardsFilter, { time: 1000000 });
                  const forwards = msg.createReactionCollector(forwardsFilter, { time: 1000000 });
            
                  forwards.on('collect', r => {
                    if(page === pages.length) return;
                    page++;
                    embed.setDescription(pages[page-1]);
                    embed.setColor('RANDOM')
                    embed.setFooter(`Sayfa ${page} / ${pages.length}`)
                    msg.edit(embed)
                  })
                  backwards.on('collect', r => {
                    if(page === 1) return;
                    page--;
                    embed.setColor('RANDOM')
                    embed.setDescription(pages[page-1]);
                    embed.setFooter(`Sayfa ${page} / ${pages.length}`)
                    msg.edit(embed)
                  })
            
                })
              })
            };
            
            
            exports.conf = {
            enabled: true,
            guildOnly: true,
            aliases: ["help", "y", "h"],
            permLevel: 0
            };
            
            exports.help = {
            name: 'yardım',
            description: 'Yardım Listesini Gösterir',
            usage: 'yardım'
            };