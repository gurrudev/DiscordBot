const { REST, Routes } = require("discord.js");
const { commands } = require("./botCommands");

const publishBotCommands = async (DISCORD_BOT_TOKEN, DISCORD_BOT_CLIENT_ID) => {
    const rest = new REST({ version: "10" }).setToken(DISCORD_BOT_TOKEN);
    try {
        console.log("Started refreshing application (/) commands.");
        await rest.put(Routes.applicationCommands(DISCORD_BOT_CLIENT_ID), {
            body: commands,
        });
        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }
};

module.exports = { publishBotCommands };
