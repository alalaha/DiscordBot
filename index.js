require("dotenv").config();

const { Client } = require("discord.js");
const handleEvents = require("./utils/ClientEvents");
const msghandler = require("./utils/MessageHandler");
const commandsLoader = require("./utils/CommandLoader");

const client = new Client();

client.prefix = "!";

(async () => {
  client.commands = await commandsLoader(client);
  handleEvents(client);
  msghandler(client);
})();

client.login(process.env.BOT_TOKEN);
