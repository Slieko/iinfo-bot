const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('game')
		.setDescription('a simple game'),
	async execute(interaction) {
		await interaction.reply('с писюном блят, поиграй');
	},
};
