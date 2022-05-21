const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
 
const token = 'OTc3NTYwNzUxMjMxMzM2NDY4.GIkiMf.vgj_8Ls8cv1CWmrpJPC-P2aWEOLvlxX-_b51A8';

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login(token);