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
    await message.reply("# Hi! there I'm Bot");
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === "ping") await interaction.reply("Pong!");
    if(interaction.commandName === "crypto") {
        const symbol = interaction.options.getString('symbol')
        const currency = interaction.options.getString('currency')
        await interaction.reply(`You asked for ${symbol} & ${currency}`)
    }
});

const { DISCORD_BOT_TOKEN, DISCORD_BOT_CLIENT_ID } = process.env;

// Publish Command's Example: (/ping)
publishBotCommands(DISCORD_BOT_TOKEN, DISCORD_BOT_CLIENT_ID);

client.login(DISCORD_BOT_TOKEN);