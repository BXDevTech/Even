const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

  await lib.discord.channels['@0.0.6'].messages.create({
    "channel_id": `${context.params.event.channel_id}`,
    "content": `Everything you need to know... <@!${context.params.event.author.id}>!`,
    "embed": {
      "title": `Eve1 Information Station`,
      "description": `**Hi 👋, I'm Eve1 | Even**
      *(▀̿Ĺ̯▀̿ ̿) - Looking for a quality Animebot?
      
      I present my new project, (EVE1) > Even Anime 多 a bot that is in > development with many cool things.*
      
      **Prefix**
      ( * )
      
      **Commands**
      **help :** This commands shows you what commands this bot have
      **Anime** : This one will help you find the anime you want
      **Gif** : This one will show you variety of anime gifs
      **Quote** : This is will bring a random quote
      **Neko** : This is will bring a random neko image
      **Waifu** : This is will bring a random waifu image
      **vote:** Vote for the bot if you know its the imposter
      **ping :** Check its health/latency once in a while
      **invite:** Invite the bot to your server from others
      **info:** Your looking at it
      
      ** Links**
      Github Page: https://github.com.com/buuya
      Support Server: Unknown
      
      **Thank You!**
      If you have any questions or feedback, please join my community Discord from the Links section above. You can also follow me on Twitter, @DaRealBuuya.
      
      **Version**
      2.0.0 : The Bot is now in Beta mode, any feedbacks you may have to improve this bot is all going to be very much taken into consideration.
      2.0.1 : Fixed bugs.`,
      "color": 0x60C0EA,
     "thumbnail": {
          "url": `https://cdn.discordapp.com/avatars/906849873570177024/eaf9d1bdbf3036dba1cb659c95e096cf.webp?size=128`,
          "height": 0,
          "width": 0
        },
       "footer": {
          "text": `Made with 💙 by BuuyaXDev`,
          "icon_url": `https://cdn.discordapp.com/avatars/700173927871152131/a_9ebf8f2b2a2db0fb9f3a50b9e53b89e0.webp?size=128`
        },
      "url": `https://discord.com/api/oauth2/authorize?client_id=906849873570177024&permissions=604129344&scope=bot%20applications.commands`,
      
    },
  });
  
//BXDevTech
