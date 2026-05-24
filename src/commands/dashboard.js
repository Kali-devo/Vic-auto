const {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder
} = require('discord.js');

const config = require('../config/dashboardConfig');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dashboard')
        .setDescription('Open the Victoria State Roleplay dashboard'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setColor(config.color)
            .setTitle('🇦🇺 Victoria State Roleplay Dashboard')
            .setDescription(
`Welcome to Victoria State Roleplay.

Use the dropdown menu below to navigate through server information, restrictions, and community rules.`
            )
            .setImage(config.banner)
            .setFooter({ text: config.footer });

        const menu = new StringSelectMenuBuilder()
            .setCustomId('dashboard-menu')
            .setPlaceholder('Select a category')
            .addOptions([
                {
                    label: 'Who We Are',
                    description: 'Learn about the community',
                    value: 'about',
                    emoji: '🌏'
                },
                {
                    label: 'Banned Weapons & Vehicles',
                    description: 'Server restrictions',
                    value: 'restrictions',
                    emoji: '🚫'
                },
                {
                    label: 'ER:LC Rules',
                    description: 'Read the server rules',
                    value: 'rules',
                    emoji: '📘'
                }
            ]);

        const row = new ActionRowBuilder().addComponents(menu);

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    }
};
