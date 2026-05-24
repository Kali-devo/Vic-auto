const {
What began with quiet sessions and low player counts quickly turned into a determined community focused on realism, professionalism, and enjoyable roleplay.

Today, Victoria State Roleplay continues to grow into a high-quality Australian ER:LC experience inspired by Victoria, Australia. Our goal is to provide immersive roleplay, realistic emergency services, and a welcoming environment for everyone.`
                    )
                    .setImage(config.banner)
                    .setFooter({ text: config.footer });
            }

            if (interaction.values[0] === 'restrictions') {
                embed = new EmbedBuilder()
                    .setColor(config.color)
                    .setTitle('🚫 Weapon & Vehicle Restrictions')
                    .addFields(
                        {
                            name: '🔫 Banned Weapons',
                            value:
`• M249
• All Snipers
• AK-47 is Booster Only`
                        },
                        {
                            name: '🚘 Vehicle Restrictions',
                            value:
`• Prestige Vehicles are restricted to VIP & Boosters
• Booster Vehicles are Booster Only
• Unrealistic vehicle use is prohibited`
                        }
                    )
                    .setImage(config.banner)
                    .setFooter({ text: config.footer });
            }

            if (interaction.values[0] === 'rules') {
                embed = new EmbedBuilder()
                    .setColor(config.color)
                    .setTitle('📘 Victoria State Roleplay Rules')
                    .setDescription(
`**1. Random Death Match (RDM)**
You may only kill another player for a valid roleplay reason. Random killing or attacking is prohibited.

**2. Fail Roleplay (FRP)**
All roleplay must remain realistic. Unrealistic actions such as standing on moving vehicles or jumping from moving cars are not allowed.

**3. New Life Rule (NLR)**
After respawning, you may not return to the same scene or continue the previous roleplay situation.

**4. Fear Roleplay**
Players must realistically react to threats, injuries, and dangerous situations.

**5. Staff Permission Roleplays**
Bank robberies, hostage roleplays, and roadwork roleplays require staff approval.

**6. Safe Zones**
Police stations, fire stations, sheriff offices, civilian spawn, and gun stores are safe zones.

**7. Criminal Groups**
Mafias and criminal groups may have a maximum of 4 members.

**8. Exotic & Prestige Vehicles**
Exotic and prestige vehicles are restricted to VIP & Boosters.

**9. Realistic Driving**
GTA-style driving, reckless crashing, and unrealistic driving are prohibited.

**10. Banned Roleplays**
• Suicide RP
• Bomb RP
• NSFW RP
• Alcohol RP
• ICE RP

**11. Gun Motion**
Gun motion is required for rifles and shotguns. Use '-gg-' or '-gets gun-' before equipping.

**12. Mini-Modding**
Members may not act as staff or attempt to moderate others.

**13. Roblox Terms of Service**
All players must follow Roblox ToS at all times.

**14. Staff Decisions**
Respect all moderator and admin decisions.

**15. Realistic Avatars**
Avatars must remain realistic and appropriate for roleplay.`
                    )
                    .setImage(config.banner)
                    .setFooter({ text: config.footer });
            }

            await interaction.update({ embeds: [embed] });
        }
    }
};
