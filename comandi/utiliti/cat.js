const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const options = { method: 'GET' };
fetch('https://api.thecatapi.com/v1/images/search', options)
.then(Response => Response.json());
const { url } = require('./Response.json');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('send rng cat image'),
	async execute(interaction) {
        const image = new AttachmentBuilder()
         .attachment(url);

		await interaction.reply({ attachments: [image] });
	},
};
