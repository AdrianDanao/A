const Discord = require("discord.js");

const Command = require("./Command.js");

const Event = require("./Events");

const config = require("../Data/config.json");

const intents = new Discord.Intents(32767);

const fs = require("fs");

class Client extends Discord.Client {
  constructor() {
    super({ intents, allowedMentions: { repliedUser: false } });

    /**
     * @type {Discord.Collection<string, Command>}
     */
    this.commands = new Discord.Collection();

    this.prefix = config.prefix;
  }

  start(token) {
    fs.readdirSync("./src/Commands")
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        /**
         * @type {Command}
         */
        const command = require(`../Commands/${files}`);
        console.log(`Command ${command.name} loaded`);
        this.commands.set(command.name, command);
      });

    fs.readdirSync;
  }
}
