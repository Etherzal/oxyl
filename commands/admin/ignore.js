const sqlQueries = Oxyl.modScripts.sqlQueries;
async function addIgnore(channel) {
	let data = await sqlQueries.dbQuery(`INSERT INTO Ignored(GUILD,CHANNEL) VALUES ("${channel.guild.id}","${channel.id}")`);
	Oxyl.modScripts.commandHandler.ignored.push(channel.id);
	return true;
}

async function removeIgnore(channel) {
	let data = await sqlQueries.dbQuery(`DELETE FROM Ignored WHERE CHANNEL = "${channel.id}"`);
	delete Oxyl.modScripts.commandHandler.ignored[Oxyl.modScripts.commandHandler.ignored.indexOf(channel.id)];
	return true;
}

exports.cmd = new Oxyl.Command("ignore", async message => {
	let channel = message.channel;
	let ignored = ~Oxyl.modScripts.commandHandler.ignored.indexOf(channel.id);

	if(ignored) {
		await removeIgnore(channel);
		return `:white_check_mark: Enabled Oxyl in ${channel.mention}`;
	} else {
		await addIgnore(channel);
		return `:white_check_mark: Disabled Oxyl in ${channel.mention}`;
	}
}, {
	cooldown: 2500,
	guildOnly: true,
	type: "admin",
	description: "Toggle Oxyl in a channel, so only admins may use it"
});
