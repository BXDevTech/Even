const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const { readdirSync } = require('fs')
const prefix = process.env.PREFIX


if (!context.params.event.content.startsWith(prefix)) return;  
const args = context.params.event.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
 

const cmd = readdirSync('./commands').find(file => file.startsWith(command))
if(cmd) await require(`../../../../commands/${cmd}`)(context.params.event, args)

//BXDevTech