const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("+help", {type: "WATCHING"})

    client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(' - ${channel.name} ${channel.type} ${channel.id}')
        })
        // General channel id: 796298888751480875
    })

    let generalChannel = client.channels.get("796298888751480875")
    const attachment = new Discord.Attachment("https://www.devdungeon.com/sites/all/themes/devdungeon2/logo.png")
    generalChannel.send(attachment)
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }
    // receivedMessage.channel.send("Message received, " + receivedMessage.author.toString()
    //   + ": " + receivedMessage.content)

    // receivedMessage.react("👍")
    // let customEmoji = receivedMessage.guild.emojis.get("796298888751480875")
    // receivedMessage.react(customEmoji)

    if (receivedMessage.content.startsWith("+")) {
        processCommand(receivedMessage)
    }
})


function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "mutiplay") {
        mutiplayCommands(arguments, receivedMessage)
    } else {
        receivedMessage.channel.send("Uknown command. Check '+help'")
    }
}

function mutiplayerCommand(arguments, receivedMessage) {
    if (arguments.lenght < 2) {
        receivedMessage.channel.send("Not enough arguments. Try '+mutiply 2 10'")
        return
    }
    let product = 1
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " is " + product.toString())
    
}

function helpCommand(arguments, receivedMessage) {
    if (arguments.lenght == 0) {
        receivedMessage.channel.send("I'm not sure what you need help with. Try '+help [topic]'")
    } else {
        receivedMessage.channel.send("Bot is currently in work meet us later in regards dm Layzer#5599 to say something " + arguments)
    }
}
    

client.login("Nzk2NDA0MTQ2NDc4NjQ1MjY4.X_XbKA.AZBNlGucx3cHUNQOKo5iBja70zk")
