const { Client } = require("discord.js");

/**
 *  @param {Client} client
 */

function msghandler(client) {
  const prefix = client.prefix;

  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  client.on("message", async (message) => {
    const prefixRegex = new RegExp(
      `^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`
    );
    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command =
      client.commands.get(commandName) ||
      client.commands.find(
        (cmd) =>
          !!cmd.aliases &&
          !!cmd.aliases.find((alias) => alias.toLowerCase() == commandName)
      );

    if (!command) return;

    try {
      await command.run(message, args);
    } catch (error) {
      message.channel
        .send(`There was an error trying to execute that command!`)
        .then((msg) => msg.delete({ timeout: 3000 }));
      console.error(error);
    }
  });
}

module.exports = msghandler;
