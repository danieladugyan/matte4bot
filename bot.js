const Discord = require('discord.js');
const client = new Discord.Client();

const YouTube = require("discord-youtube-api");
const youtube = new YouTube(process.env.YT_APIKEY);

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('messge', async (message) => {
  try {
    if (message.content.charAt(0) === '.') {
      let uppgift = message.content.slice(1);
      let ytsearch = "Fredrik Lindmark Matte 4 " + uppgift;
      let video = await youtube.searchVideos(ytsearch);

      message.reply(video);
    }
  } catch () {
    console.error("Response function failed!");
  }
});

// DO NOT CHANGE
client.login(process.env.CLIENT_SECRET);
