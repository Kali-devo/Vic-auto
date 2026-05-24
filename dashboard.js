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
            .setImage('https://cdn.discordapp.com/attachments/1398475556009545881/1507957037232029826/Dashboard.png?ex=6a13c9ee&is=6a12786e&hm=4416020980b7d2dfb34256c06ee76612053f8f709d5d8f832ce8625e83939ec5&') // ADD YOUR BANNER URL
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
