const { SlashCommandBuilder } = require("discord.js");

const commands = [
    new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong!"),
    new SlashCommandBuilder()
        .setName("crypto")
        .setDescription("Provides information about crypto currencies")
        .addStringOption((option) =>
            option
                .setName("symbol")
                .setDescription(
                    "The symbol of the cryptocurrency (e.g., bitcoin)",
                )
                .setRequired(true),
        )
        .addStringOption((option) =>
            option
                .setName("currency")
                .setDescription("The currency to convert into (e.g., INR)")
                .setRequired(true),
        )
        .toJSON(), // Convert the command to a JSON object, needed by the REST API
];

module.exports = { commands };
