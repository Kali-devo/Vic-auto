const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'interactionCreate',

    async execute(interaction) {

        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId === 'dashboard-menu') {

            // SUPPORT
            if (interaction.values[0] === 'support') {

                const embed = new EmbedBuilder()
                    .setColor('Blue')
                    .setTitle('Support')
                    .setDescription(`
Need help?

Open a support ticket in the support channel.

Support includes:
- Staff reports
- Player reports
- Ban appeals
- General assistance
                    `);

                return interaction.reply({
                    embeds: [embed],
                    ephemeral: true
                });
            }

            // INFORMATION
            if (interaction.values[0] === 'information') {

                const embed = new EmbedBuilder()
                    .setColor('Green')
                    .setTitle('Server Information')
                    .setDescription(`
Welcome to Victoria State Roleplay.

Server Type:
- Australian ER:LC Roleplay

Departments:
- Victoria Police
- Fire & Rescue
- SES
- Civilian Operations

Please maintain realistic roleplay at all times.
                    `);

                return interaction.reply({
                    embeds: [embed],
                    ephemeral: true
                });
            }

            // ERLC RULES
            if (interaction.values[0] === 'erlc_rules') {

                const embed = new EmbedBuilder()
                    .setColor('Orange')
                    .setTitle('ER:LC Rules')
                    .setDescription(`
• No FRP (Fail Roleplay)
• No NITRP
• No exploiting
• No evasion
• No random killing
• Follow Roblox ToS
• Listen to staff
• No trolling
• No abuse of game mechanics
• Keep roleplay realistic
                    `);

                return interaction.reply({
                    embeds: [embed],
                    ephemeral: true
                });
            }

            // DISCORD RULES
            if (interaction.values[0] === 'discord_rules') {

                const embed = new EmbedBuilder()
                    .setColor('Red')
                    .setTitle('Discord Rules')
                    .setDescription(`
• Minimal swearing
• No doxxing
• No threats
• No violence/extremism
• Follow Discord ToS
• No harassment
• No NSFW content
• Respect all members
• No advertising
                    `);

                return interaction.reply({
                    embeds: [embed],
                    ephemeral: true
                });
            }

            // BANNED ITEMS
            if (interaction.values[0] === 'banned_items') {

                const embed = new EmbedBuilder()
                    .setColor('DarkRed')
                    .setTitle('Banned Items & Restrictions')
                    .setDescription(`
## Weapon Restrictions
❌ M249
❌ All sniper rifles

⚠ AK-47 is Booster Only

✅ All other weapons allowed

## Vehicle Restrictions
❌ Booster vehicles prohibited
❌ Prestige vehicles prohibited

✅ Standard civilian vehicles allowed
✅ Emergency vehicles allowed for departments
                    `);

                return interaction.reply({
                    embeds: [embed],
                    ephemeral: true
                });
            }
        }
    }
};
