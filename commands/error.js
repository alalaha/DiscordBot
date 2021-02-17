const { Message } = require("discord.js");

module.exports = {
  name: "error",
};

/**
 *  @param { Message } message
 *  @param {Array<String>} args
 */
module.exports.run = function (message, args) {
  throw new Error("Cos popsulem!!!!!!");
};
