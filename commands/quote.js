const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const axios = require('axios')

module.exports = async (message, args) => {
  const { data } = await axios("https://animechan.vercel.app/api/random").catch(err => {})
   if(!data) return await lib.discord.channels['@0.1.1'].messages.create({
    "channel_id": message.channel_id,
    "content": "Oops, something went wrong!",
  });
  
  await lib.discord.channels['@0.1.1'].messages.create({
    "channel_id": message.channel_id,
    "content": "",
    "tts": false,
    "embed": {
      "type": "rich",
      "title": `${data.anime} by ${data.character}`,
      "description": `*${data.quote}*`,
      "color": 0x60C0EA,
      "thumbnail": {
          "url": `https://cdn.discordapp.com/avatars/906849873570177024/eaf9d1bdbf3036dba1cb659c95e096cf.webp?size=128`,
          "height": 0,
          "width": 0
        },
       "footer": {
          "text": `Made with 💙 by BuuyaXD`,
          "icon_url": `https://cdn.discordapp.com/avatars/700173927871152131/a_9ebf8f2b2a2db0fb9f3a50b9e53b89e0.webp?size=128`
        },
        url:`https://discord.com/api/oauth2/authorize?client_id=906849873570177024&permissions=604129344&scope=bot%20applications.commands` ,
    }
  });
}

//BXDevTech