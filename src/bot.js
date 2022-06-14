
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
 
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ethan') {
		await interaction.reply('He is a retard!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});


client.login(token)
