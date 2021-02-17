const { Message } = require("discord.js");

module.exports = {
  name: "prefix",
};

/**
 *  @param { Message } message
 *  @param {Array<String>} args
 */
module.exports.run = function (message, args) {
  message.reply(
    `you can either ping me or use \`${message.client.prefix}\` as my prefix.`
  );
};
