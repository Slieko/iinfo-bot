/* eslint-disable no-mixed-spaces-and-tabs */

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('give')
    .setDescription('Give a user a role.')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to give the role to.')
        .setRequired(true))
    .addRoleOption(option =>
      option.setName('role')
        .setDescription('The role to give to the user.')
        .setRequired(true)),
  async execute(interaction) {
		const guild = interaction.guild;
		const member = guild.members.cache.get(interaction.options.getUser('user').id);
		const role = interaction.options.getRole('role');

		try {
		  await member.roles.add(role);
		  await interaction.reply({ content: `The role ${role.name} has been added to ${member.user.username}.`, ephemeral: true });
		}
 catch (error) {
		  console.error(error);
		  await interaction.reply({ content: 'There was an error giving the role.', ephemeral: true });
		}
},
};