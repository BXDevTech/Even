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
    "title": `Eve1 Help Station`,
      "description": `You have arrived at >help-gif Command station`,
    "color": 0x60C0EA,
    "fields": [
      {
        "name": `Dancing anime`,
        "value": `^dance`,
        "inline": true
      },
      {
        "name": `Happy anime`,
        "value": `^happy`,
        "inline": true
      },
      {
        "name": `Sad anime`,
        "value": `^sad`,
        "inline": true
      },
      {
        "name": `Angry anime`,
        "value": `^angry`,
        "inline": true
      },
      {
        "name": `Winking anime`,
        "value": `^wink`,
        "inline": true
      },
      {
        "name": `Slaping`,
        "value": `^slap`,
        "inline": true
      },
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