const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});


await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "allowed_mentions": {
    "replied_user": true,
    "parse": [
      "users"
    ]
  },
  "embeds": [
    {
    "type": "rich",
    "title": `Eve1 Plugin Commands`,
      "description": `These are all the things you can do with Even`,
    "color": 0x60C0EA,
    "fields": [
      {
        "name": `Anime`,
        "value": `^anime`,
        "inline": true
      },
      {
        "name": `Gifs`,
        "value": `^gif`,
        "inline": true
      },
      {
        "name": `Quote`,
        "value": `^quote`,
        "inline": true
      },
      {
        "name": `Waifu`,
        "value": `^waifu`,
        "inline": true
      },
      {
        "name": `Neko`,
        "value": `^neko`,
        "inline": true
      },
      {
        "name": `General`,
        "value": `^general`,
        "inline": true
      },
      ],
      "thumbnail": {
        "url": `https://cdn.discordapp.com/avatars/906849873570177024/eaf9d1bdbf3036dba1cb659c95e096cf.webp?size=128`,
        "height": 0,
        "width": 0
      },
     "footer": {
        "text": `Made with 💙 by Buuya`,
        "icon_url": `https://cdn.discordapp.com/avatars/700173927871152131/a_9ebf8f2b2a2db0fb9f3a50b9e53b89e0.webp?size=128`
      },
    }
  ]
});

//BXDevTech