const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const axios = require('axios');

module.exports = async (message, args) => {
   let image = message.content.split(' ').slice(1)[0];
  if (!image && message.attachments.length)
    image = message.attachments[0].url;
  
  if (!image)
    return lib.discord.channels['@0.2.0'].messages.create({
      content: `Please provide the anime scene image which you want to trace.`,
      channel_id: message.channel_id,
    });
  
  const traceDetails = await axios(
    `https://api.trace.moe/search?url=${encodeURIComponent(image)}`
  )
    .then((res) => res.data)
    .catch((err) => {
      return lib.discord.channels['@0.2.0'].messages.create({
        content: `Unable to trace the image!`,
        channel_id: message.channel_id,
      });
    });
  
  if (!traceDetails.result.length)
    return lib.discord.channels['@0.2.0'].messages.create({
      content: `No results founds related to given image.`,
      channel_id: message.channel_id,
    });
  
  const animeResult = traceDetails.result[0];
  const animeDetails = await axios
    .post(`https://graphql.anilist.co`, {
      query: `query ($id: Int) {
      Media(id: $id, type: ANIME) {
        title {
          english
        }
        coverImage {
          large
          color
        }
        status
        episodes
        description
        bannerImage
      }
    }`,
      variables: {id: animeResult.anilist},
    })
    .then((res) => (res.data ? res.data.data.Media : null))
    .catch((err) => {});
  
  return lib.discord.channels['@0.2.0'].messages.create({
    content: ``,
    embed: {
      title: animeDetails.title.english,
      description:
        animeDetails.description.substring(0, 200) +
        ` **[[Read More](https://anilist.co/anime/${animeResult.anilist})]**`,
      fields: [
        {
          name: `Traced Image/Video`,
          value: `EP. ${animeResult.episode} [Video Clip](${animeResult.video}) | [Image](${animeResult.image})`,
          inline: true,
        },
        {
          name: `Status`,
          value: `${animeDetails.episodes} Episodes | ${animeDetails.status}`,
          inline: true,
        },
      ],
      image: {url: animeDetails.bannerImage},
      color: animeDetails.coverImage.color
        ? parseInt(animeDetails.coverImage.color.replace('#', '0x'))
        : 0x60C0EA,
        thumbnail: {
        url: ``,
        height: 0,
        width: 0
       },
        footer: {
        text: `Made with 💙 by BuuyaXD`,
        icon_url: `https://cdn.discordapp.com/avatars/700173927871152131/a_9ebf8f2b2a2db0fb9f3a50b9e53b89e0.webp?size=128`
       },
        url:`https://discord.com/api/oauth2/authorize?client_id=906849873570177024&permissions=604129344&scope=bot%20applications.commands` ,
       },
       }); 
      }
        
//BXDevTech
    