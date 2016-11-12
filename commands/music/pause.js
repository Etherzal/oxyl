const Discord = require("discord.js"),
	music = require("../../modules/music.js"),
	Oxyl = require("../../oxyl.js"),
	framework = require("../../framework.js");

Oxyl.registerCommand("pause", "music", (message, bot) => {
	var voice = music.voiceCheck(message.member);
	if(!voice) {
		return "you and Oxyl must both be in the same channel to pause the music";
	} else if(music.getDispatcher(message.guild).paused) {
		return "the music is already paused";
	} else {
		music.pauseStream(message.guild);
		return `paused the music in ${voice.name} :pause_button:`;
	}
}, [], "Pause the music in your channel", "[]");