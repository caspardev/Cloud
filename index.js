// Variables
const Discord = require('discord.js');
const cloud = new Discord.Client();
const cloudConfig = require("./cloudConfig.json");
const prefix = cloudConfig.prefix;

// Logging
console.log(cloudConfig.token);
console.log(cloudConfig.prefix);

// Initializing Bot
cloud.on("ready", () => {
  console.log(`${cloud.user.username} Initialized.`);
});

// Run Cloud
cloud.on("message", async message => {
    if(message.author.cloud) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    // More Logging
    console.log(messageArray);
    console.log(command);
    console.log(args);

    // Running |me| command.
    if(!message.content.startsWith(prefix)) return;
    
    if(command === `${prefix}me`) {

        // Embed
        let embed = new Discord.RichEmbed()
 .setAuthor(message.author.username)
 .setDescription("Your stats on the server.")
 .setColor("#008BFF")
 .addField("Username", `${message.author.username}#${message.author.discriminator}`)
 .addField("Created", message.author.createdAt)
        
        message.channel.sendEmbed(embed);


    }

});

// Bot Login
cloud.login(cloudConfig.token);