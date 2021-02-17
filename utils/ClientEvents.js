function handleEvents(client) {
  client.on("ready", () => {
    client.user.setPresence({
      activity: { type: "WATCHING", name: "He won't let me sleep HELP" },
      status: "Online",
    });

    console.log(`Logged in as ${client.user.tag}!`);
    console.log("Bot is active");
  });

  client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.find(
      (ch) => ch.name === "siema"
    );
    if (!channel) return;
    channel.send(`Siema kurwo, ${member}`);
  });
}

module.exports = handleEvents;
