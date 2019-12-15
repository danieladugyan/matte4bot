if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const Discord = require('discord.js');
const client = new Discord.Client();

const YouTube = require("discord-youtube-api");
const youtube = new YouTube(process.env.YT_APIKEY);

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', async (message) => {
  try {
    if (message.content.charAt(0) === '.') {
      let uppgift = message.content.slice(1);
      let ytsearch = "Fredrik Lindmark Matematik 5000 4 " + uppgift;
      let video = await youtube.searchVideos(ytsearch);
      let res = "https://www.youtube.com/watch?v=" + video.id;

      message.reply(res);
    }
  } catch (err) {
    message.reply(err.toString());
    console.log("Response function failed!" + err);
  }
});

// DO NOT CHANGE
client.login(process.env.CLIENT_SECRET).catch((err) => {
  console.error("Login problem: "+err);
});
