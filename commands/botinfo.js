const Discord = require("discord.js"),
	Oxyl = require("../oxyl.js");

Oxyl.registerCommand("botinfo", "default", (message, bot) => {
	return "```" +
	"\nGuilds: " + bot.guilds.size +
	"\nChannels: " + bot.channels.filter(c => c.type == "text").size +
	"\nUsers:" + bot.users.size +
	"\n" +
	"\nCreator: minemidnight & TonyMaster21" + 
	"\nPrefix/Suffix: " + Oxyl.config["prefix"] +
	"\nGithub: https://github.com/minemidnight/oxyl" +
	"\nLibrary: discord.js" +
	"```";
}, [], "View lots of information about Oxyl", "[]");