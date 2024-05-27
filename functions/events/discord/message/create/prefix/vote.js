const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": `Fine, you got me i'm the imposter. Vote me out... <@!${context.params.event.author.id}>!`,
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 5,
          "label": `Top.gg`,
          "url": `https://top.gg/bot/962858123515805717`,
          "disabled": true,
          "type": 2
        },
        {
          "style": 5,
          "label": `VoidBots`,
          "url": `https://voidbots.net/bot/962858123515805717/`,
          "disabled": true,
          "type": 2
        },
        {
          "style": 5,
          "label": `Bot.gg`,
          "url": `https://bot.gg/eve1/`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "allowed_mentions": {
    "replied_user": false,
    "parse": [
      "users"
    ]
  },
  "embeds": [
    {
      "type": "rich",
      "title": `Eve1 Voting station`,
      "description": `If you would vote for **Even** then it would make me very happy!`,
      "color": 0x60C0EA,
      "fields": [
        {
          "name": `Note : You can vote once every 12 hrs`,
          "value": "\u200B"
        },
        {
          "name": `Click the buttons below to get started`,
          "value": "\u200B"
        }
      ],
      "thumbnail": {
          "url": `https://cdn.discordapp.com/avatars/906849873570177024/eaf9d1bdbf3036dba1cb659c95e096cf.webp?size=128`,
          "height": 0,
          "width": 0
        },
       "footer": {
          "text": `Made with 💙 by BuuyaXD`,
          "icon_url": `https://cdn.discordapp.com/avatars/700173927871152131/a_9ebf8f2b2a2db0fb9f3a50b9e53b89e0.webp?size=128`
        },
      "url": `https://discord.com/api/oauth2/authorize?client_id=906849873570177024&permissions=604129344&scope=bot%20applications.commands`
    }
  ]
});

//BXDevTech