const {
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder
} = require('discord.js');

module.exports = {
    name: 'dashboard',

    async execute(client, message) {

        // MAIN DASHBOARD EMBED
        const dashboardEmbed = new EmbedBuilder()
            .setColor('#1e90ff')
            .setTitle('Victoria State Roleplay | Dashboard')
            .setDescription(`
Welcome to **Victoria State Roleplay**.

Use the dropdown menu below to navigate through:
- Support
- Server Information
- Rules
- Banned Weapons
- Vehicle Restrictions

Please follow all server and Discord rules.
            `)
            .setImage('YOUR_BANNER_URL_HERE') // ADD YOUR BANNER URL
            .setFooter({ text: 'Victoria State Roleplay' });

        // DROPDOWN MENU
        const dashboardMenu = new StringSelectMenuBuilder()
            .setCustomId('dashboard-menu')
            .setPlaceholder('Select an option')
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Support')
                    .setDescription('Get support information')
                    .setValue('support'),

                new StringSelectMenuOptionBuilder()
                    .setLabel('Information')
                    .setDescription('Server information')
                    .setValue('information'),

                new StringSelectMenuOptionBuilder()
                    .setLabel('ER:LC Rules')
                    .setDescription('View ER:LC rules')
                    .setValue('erlc_rules'),

                new StringSelectMenuOptionBuilder()
                    .setLabel('Discord Rules')
                    .setDescription('View Discord rules')
                    .setValue('discord_rules'),

                new StringSelectMenuOptionBuilder()
                    .setLabel('Banned Items')
                    .setDescription('Weapons & vehicle restrictions')
                    .setValue('banned_items')
            );

        const row = new ActionRowBuilder().addComponents(dashboardMenu);

        await message.channel.send({
            embeds: [dashboardEmbed],
            components: [row]
        });
    }
};
