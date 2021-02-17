const { Message } = require("discord.js");

module.exports = {
  name: "halo",
};

/**
 *  @param { Message } message
 *  @param {Array<String>} args
 */
module.exports.run = function (message, args) {
  message.channel.send(`Halo kurwa, SŁYCHAĆ MNIE <@${message.author.id}>?`);
};
