const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": `Fine, you got me i'm the imposter. Vote me out... <@!${context.params.event.author.id}>!`,
  "tts": false,
  "components": [
    {
      "type": 1,
components: [
            {
              style: 5,
              label: `Invite Me To Your Server`,
              url: `https://discord.com/api/oauth2/authorize?client_id=906849873570177024&permissions=604129344&scope=bot%20applications.commands`,
              disabled: false,
              type: 2,
            },
          ],
        },
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
      "title": `Hi 👋, I'm Eve1 | Even`,
      "description": `🤖 Thank You For inviting Me To This Party, It's Very *LIT!*\n🔗 If You Would Like To Invite Me To Other Parties...`,
      "color": 0x60C0EA,
      "fields": [
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