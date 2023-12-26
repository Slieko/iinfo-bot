const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('server info'),
  async execute(interaction) {

 const embed = new EmbedBuilder()
  .setAuthor({
    name: 'Info',
  })
  .setTitle(`${interaction.guild.name}`)
  .setDescription(`**Members: ${interaction.guild.memberCount}**`)
  .setColor('#e400f5')
  .setTimestamp();

  await interaction.reply({ embeds: [embed] });
} };
