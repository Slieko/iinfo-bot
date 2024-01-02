const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const request = require('request');
const fs = require('fs');
const { url } = require('./Cat.json');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('send rng cat image'),
	async execute(interaction) {
		request
		.get('https://api.thecatapi.com/v1/images/search')
		.pipe(fs.createWriteStream('./comandi/utiliti/Cat.json'));

		const Embed = new EmbedBuilder()
		.setTitle('cet :3')
		.setImage(url);
interaction.reply({ embeds: [Embed] });
	},
};
