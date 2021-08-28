const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor("Open Source Code")
        .setTitle("Tekan untuk mendapatkan Source Code")
        .setURL("https://github.com/Dextyerz/Basic-Economy-Bot.git")
        .setDescription(`Jangan Lupa Kasih Credit :)`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter('Made by Not Dextyerz#1000');

    return message.channel.send(embed);
}

exports.help = {
    name: "source",
    aliases: ["h"],
    usage: `source`
}
