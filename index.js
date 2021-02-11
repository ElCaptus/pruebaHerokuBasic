const { default: Collection } = require('@discordjs/collection');
const {Client, MessageEmbed}= require('discord.js');
const { parse } = require('dotenv-flow');
const client = new Client();
var colors = require('colors');


require('dotenv-flow').config();

const config={
    token: process.env.token
}

client.on('ready', () => {
    console.log(`Bot ready as ${client.user.tag}`.green);
    client.user.setStatus('online');
});

client.on('message', async msg => {
    //COMANDS FOR EVERYONE
    console.log(msg.content.grey);
});

client.login(config.token)