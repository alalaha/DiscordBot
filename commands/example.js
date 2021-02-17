const { Message } = require("discord.js");

module.exports = {
  name: "example",
};

/**
 *  @param { Message } message
 *  @param {Array<String>} args
 */
module.exports.run = function (message, args) {
  message.reply("example command");
};
