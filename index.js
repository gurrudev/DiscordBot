const { Client, GatewayIntentBits } = require("discord.js");
const { publishBotCommands } = require("./commands");
const {} = require("dotenv/config");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.content === "Hi") await message.reply("Hi! there I'm Bot");
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === "ping") {
        await interaction.reply("Pong!");
    }
});

const { DISCORD_BOT_TOKEN, DISCORD_BOT_CLIENT_ID } = process.env;

client.login(DISCORD_BOT_TOKEN);
// Publish Command's Example: (/ping)
publishBotCommands(DISCORD_BOT_TOKEN, DISCORD_BOT_CLIENT_ID);
