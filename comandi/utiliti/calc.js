const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('calc')
		.setDescription('a simple "plus" letter/number calculator')
        .addStringOption(option =>
            option.setName('1')
              .setDescription('1 letter/number')
              .setRequired(true))
        .addStringOption(option =>
             option.setName('2')
              .setDescription('2 letter/number')
              .setRequired(true)),
	async execute(interaction) {
        const x = interaction.options.getString('1');
        const y = interaction.options.getString('2');
        const result = +x + +y;

		await interaction.reply(result);
	},
};
