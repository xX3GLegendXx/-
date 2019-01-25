const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NDc4NTAzMjk3MTM3OTAxNTY5.DmVVEA.hUpIEsVeN6W0FssMzbhXcnKrqrk';


client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`!Help | ShadyMC.minehut.gg`);
});

client.login(token);

var prefix = '!';
client.on('message', message => {
if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let args1 = message.content.split(' ').slice(1);
//Commands

if (command === `hello`) {
message.channel.send(`**Hello And To You !**`);
   }

//Next Command 

//Commands

if (command === `helpop`) {
message.channel.send(`
{user.tag} **Need Some Help !**  

@STAFF 

**Staffs Will Read This Message And They Will Help You !**
`);
   }
//Next Command

//Commands


//Next Command 
if (command === `staff`) {
message.channel.send(`
**[]---------------------------------------------------------[]**

         **~~~** \`Commands For [ADMINSTRATOR]\`**~~~** 


    ${prefix}\`ban\`
    **(Ban Players)** \`Permision For [ADMINSTRATOR] !\`
    ${prefix}\`unban\`
    **(UnBan Players)** \`Permision For [ADMINSTRATOR] !\`
    ${prefix}\`mute\`
    **(Mute Players)** \`Permision For [ADMINSTRATOR] !\`
    ${prefix}\`unmute\`
    **(Unmute Players)** \`Permision For [ADMINSTRATOR] !\`
    ${prefix}\`kick\`
    **(Kick Players)** \`Permision For [ADMINSTRATOR] !\`
    ${prefix}\`announce\`
    **(Announce Something)** \`Permision For [ADMINSTRATOR] !\`
    ${prefix}\`clearchat\`
    **(Clear Chat)** \`Permision For [ADMINSTRATOR] !\`
    ${prefix}\`warn\`
    **(Warning Players)** \`Permision For [ADMINSTRATOR] !\`

**[]---------------------------------------------------------[]**
`);
   }


//Next Command
if (command === `help`) {
message.channel.send(`
**[]--------------------------------------------[]**

       **~~~** \`[Your Commands]\` **~~~**

     ${prefix}\`help\`
     **(See The Commands)**
     ${prefix}\`helpop\`            <---\`Not Ready\` **Thanks!**
     **(If You Need Help From The \`MEMBERS STAFF\`)**
     ${prefix}\`hello\`
     **(Say The Bot Hello In You)**
     ${prefix}\`question\`
     **(Question Something)**
     ${prefix}\`roast\`
     **(Roast Someone)**
     ${prefix}\`info\`
     **(See Your Stastics)**
     ${prefix}\`ping\`
     **(See Your MS - Ping)**
     ${prefix}\`membercount\`
     **(See The Ammount Of Members)**

**[]--------------------------------------------[]**

 **~~~ (**\`Commands For [ADMINSTRATOR]\`**) ~~~**

     ${prefix}\`staff\` 
     **(See The \`ADMINSTRATOR\` Commands)**

**[]--------------------------------------------[]**
`);
   }

if (message.content.startsWith('!kick')) {
    if ( message.channel.permissionsFor( message.member ).hasPermission( "ADMINISTRATOR" ) ) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply(' You cant kick that player :x: ');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
    return
  }
  message.channel.sendMessage(message.author + `You Don't Have Permission \`ADMINSTRATOR\` `);
}



  if (message.content.startsWith('!ban')) {
    if ( message.channel.permissionsFor( message.member ).hasPermission( "ADMINISTRATOR" ) ) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          
        }).then(() => {
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          message.reply(' You cant ban that player :x: ');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to ban!');
    }
    return
  }
  message.channel.sendMessage(message.author + `You Don't Have Permission \`ADMINSTRATOR\` `);
}
    
if (message.content.startsWith('!unban')) {

    if ( message.channel.permissionsFor( message.member ).hasPermission( "ADMINISTRATOR" ) ) {

var chat = message.channel;
chat.guild.unban(args[1])
  .then(user => console.log(`Unbanned ${user.username} from ${guild}`))
  .catch(console.error);
  message.reply('I was unban to the member');
        return
     }
message.channel.sendMessage(message.author + `You Don't Have Permission \`ADMINSTRATOR\` `);
}

if (message.content.startsWith(prefix + "membercount")) {
console.log("User ran MemberCount command")
message.delete()
message.channel.sendMessage("There are currently " + message.guild.memberCount + " Humans here.");
  }

if (message.content.toLowerCase().startsWith(prefix + `announce`)) {
  if (message.member.hasPermission("ADMINISTRATOR")) {
    // I've added this part
    let channel = message.mentions.channels.first(); // you get the first mentioned channel
    if (!channel) return message.reply("No channel mentioned."); // if it doesn't exist, you exit
    let args = message.content.split(" ").slice(2).join(" "); // if it exist, you remove the command AND the channel

    let split = args.split("-");
    let url = args[2];
    channel.sendMessage("@everyone", { // here you send it to your channel instead of the same one
      embed: {
        color: 0x1ebea8,
        title: "New Announcement!",
        description: split[0],
        url: split[1],
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: message.author.username
        }
      }
    });
  }
}

  if(command === "sayy") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

  if (command === "ping") {
     message.channel.send(`:ping_pong: Pong! Time - **${Date.now() - message.createdTimestamp}ms**`)
   }
 
if (command === "mute") {
  if (message.member.hasPermission("ADMINISTRATOR")) {
   let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
  if (!modlog) return message.reply('I cant find a logs channel, are you sure that you have one? :x:').catch(console.error);
  if (!muteRole) return message.reply('I cant find a mute role :x:').catch(console.error);
  if (reason.length < 1) return message.reply('You must give a reason for the mute. :x:').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them. :x:').catch(console.error);
  message.channel.sendMessage("***The user has been successfully muted! :white_check_mark:***")
 
  const embed = new Discord.RichEmbed()
    .setColor(0xFFDF00)
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Actions Taken:', 'Mute or Unmute :shrug:')
    .addField('Reason Provided:', reason);
 
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have substancial permissions. :x:').catch(console.error);
 
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
 
 
  }
  }
};

if (command === "unmute") {
  if (message.member.hasPermission("ADMINISTRATOR")) {
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'logs');
  let unmuteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
  if (!modlog) return message.reply('I cant find a logs channel, are you sure that you have one? :x:').catch(console.error);
  if (!unmuteRole) return message.reply('I cant find a unmute role :x:').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to unmute them. :x:').catch(console.error);
  message.channel.sendMessage("***The user has been successfully unmuted! :white_check_mark:***")
 
  const embed = new Discord.RichEmbed()
    .setColor(0xFFDF00)
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Actions Taken:', 'Mute or Unmute :shrug:')
 
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have substancial permissions. :x:').catch(console.error);
 
 
if (message.guild.member(user).roles.has(unmuteRole.id)) {
    message.guild.member(user).removeRole(unmuteRole).then(() => {
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
       message.channel.send("This person is not muted own message")
    }
 
 
  }
  }

if (command === "warning") {
  if (message.member.hasPermission("ADMINISTRATOR")) {
   let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'logs');
  if (!modlog) return message.reply('I cant find the logs channel, make sure that I have perms to see it, or create one if you havent.  :x:');
  if (reason.length < 1) return message.reply('You must give a reason for the warning. :x:');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them. :x:').catch(console.error);
  message.channel.sendMessage("***The User has been successfully warned! :white_check_mark:***")
  const embed = new Discord.RichEmbed()
  .setColor(0xFFDF00)
  .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Actions Taken:', 'Warn')
  .addField('Reason Provided:', reason);
  return client.channels.get(modlog.id).sendEmbed(embed);
 
  }
}

if (command === "info") {
 
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("0xFFDF00")
  .setDescription("This is your discord info!")
  .addField("Account Username", `${message.author.username}#${message.author.discriminator}`)
  .addField("Author/User ID", message.author.id)
  .addField("Discord Account created on:", message.author.createdAt)
 
  message.channel.sendEmbed(embed);
 
}

    if (command === "question") {
    let question = args.join(' ');
    if (question.length < 1) return message.reply('You must supply a question.').catch(console.error);
      var ball = [
                "It is certain",
                "It is decidedly so",
                "Without a doubt",
                "Yes definitely",
                "You may rely on it",
                "As I see it, yes",
                "Most likely",
                "Outlook good",
                "Yes",
                "Signs point to yes",
                "Reply hazy try again",
                "Ask again later",
                "Better not tell you now",
                "Cannot predict now",
                "Concentrate and ask again",
                "Don't count on it",
                "My reply is no",
                "My sources say no",
                "Outlook not so good",
                "Very doubtful"
 
];
var balls = ball[Math.floor(Math.random() * ball.length)];
    message.channel.send("Question: " + question + " Answer: " + balls);
  }

  if (command === "status") {
    if (message.author.id == "458269478904397824") {
    var argresult = args.join(' ');
    client.user.setStatus(argresult);
    message.reply("I`m OK :white_check_mark:");
    } else {
      message.reply("You do not have the substancial permissions. Creator of the bot only. :x:");
    }
  }

  if (command === "clear") {
    let modlog = message.guild.channels.find('name', 'logs');
    message.delete();
 if (!message.member.permissions.has("MANAGE_MESSAGES")) {
   message.channel.send('Sorry, you do not have permission to perform the clear command. :x:');
   return;
 } else if (!message.channel.permissionsFor(client.user).has("MANAGE_MESSAGES")) {
   message.channel.send("Sorry, you do not have permission to perform this command, check my permissions and try again. :x:");
   return;
 }
const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[2]) ? parseInt(message.content.split(' ')[2]) : parseInt(message.content.split(' ')[1])
if (!amount) return message.channel.send('Please specify an amount to delete! :x:');
if (!amount && !user) return message.channel.send('Please specify a user and amount, or just an amount of messages to clear! :x:');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
   const filterBy = user ? user.id : client.user.id;
   messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
 message.channel.sendMessage("***The server messages/users messages has been successfully clear! :white_check_mark:***")
 const embed = new Discord.RichEmbed()
   .setColor(0xFFDF00)
   .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
   .addField('Actions Taken:', 'Clear Chat')
     return client.channels.get(modlog.id).sendEmbed(embed);
}) }
 
   if (command === "roast") {
     let user = message.mentions.users.first();
      if (message.mentions.users.size < 1) return message.reply('You must mention someone to roast them.').catch(console.error);
      var roast = [
                "Were you born on the highway? That is where most accidents happen.",
                "I was going to give you a nasty look... but I see you already have one.",
                "Remember when I asked for your opinion? Me neither.",
                "Everyone’s entitled to act stupid once in awhile, but you really abuse the privilege.",
                "I'm trying to see things from your point of view, but I can't get my head that far up my ass.",
                "I haven't seen a fatty like you run that fast since twinkies went on sale for the first time.",
                "Two wrongs don't make a right, take your parents as an example.",
                "Just looking at you, I now understand why some animals eat their young offspring.",
                "Does time actually fly when you're having sex, or was it just one minute after all?",
                "You should go do that tomorrow. Oh wait, nevermind, you've made enough mistakes already for today.",
                "This is why you dont have nice things",
                "My teacher told me to erase mistakes, i'm going to need a bigger eraser.",
                "You're IQ's lower than your dick size.",
                "Are you always such an idiot, or do you just show off when I’m around?",
                "There are some remarkably dumb people in this world. Thanks for helping me understand that.",
                "I could eat a bowl of alphabet soup and shit out a smarter statement than whatever you just said.",
                "You’re about as useful as a screen door on a submarine.",
                "You always bring me so much joy—as soon as you leave the room.",
                "Stupidity’s not a crime, so feel free to go.",
                "If laughter is the best medicine, your face must be curing the world.",
                "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
                "It looks like your face caught fire and someone tried to put it out with a hammer.",
                "Scientists say the universe is made up of neutrons, protons and electrons. They forgot to mention morons like you.",
                "Why is it acceptable for you to be an idiot but not for me to point it out?",
                "You're so fat you could sell shade.",
                "Your family tree must be a cactus because everyone on it is a prick.",
                "You'll never be the man your mother is.",
                "Just because you have an ass doesn't mean you need to act like one.",
                "Which sexual position produces the ugliest children? Ask your mother she knows.",
                "If I had a face like yours I'd sue my parents.",
                "The zoo called. They're wondering how you got out of your cage?",
                "Hey, you have something on your chin... no, the 3rd one down.",
                "Aww, it's so cute when you try to talk about things you don't understand.",
                "You are proof that evolution can go in reverse.",
                "Brains aren't everything. In your case they're nothing.",
                "You're so ugly when you look in the mirror, your reflection looks away.",
                "I'm sorry I didn't get that - I don't speak idiot.",
                "It's better to let someone think you're stupid than open your mouth and prove it.",
                "Were you born this stupid or did you take lessons?",
                "You're such a beautiful, intelligent, wonderful person. Oh I'm sorry, I thought we were having a lying competition.",
                "Don't you get tired of putting make up on two faces every morning?",
                "Hey, I'm straighter than the pole your mom dances on.",
                "If ugliness were measured in bricks, you would be the Great Wall of China.",
                "I thought I said goodbye to you this morning when I flushed the toilet",
                "If you're trying to improve the world, you should start with yourself. Nothing needs more help than you do",
                "Zombies are looking for brains. Don't worry. You're safe.",
                "spreading rumors? At least you found a hobby spreading something other than your legs.",
                "i would tell you to eat trash but that’s cannibalism",
                "If you spoke your mind, you would be speechless",
                "I can fix my ugliness with plastic surgery but you on the other hand will stay stupid forever",
                "Acting like a dick won't make yours any bigger",
                "If I wanted to hear from an asshole, I would have farted",
                "Roses are red. Violets are blue. God made us beautiful. What the hell happened to you?",
                "You remind me of a penny, two faced and worthless!",
                "I've met some pricks in my time but you my friend, are the f*cking cactus",
                "I'd slap you, but that would be animal abuse",
                "If you're gonna be a smartass, first you have to be smart. Otherwise you're just an ass. ",
                "I know I’m talking like an idiot. I have to, other wise you wouldn't understand me.",
                "You're so dumb, your brain cell died of loneliness",
                "You shouldn't let your mind wander..its way to small to be out on its own",
                "I don't know what makes you so dumb, but its working",
                "You should put the diaper on your mouth, that's where the craps comin' out.",
                "You would be much more likable if it wasn’t for that hole in your mouth that stupid stuff comes out of. ",
                "Could you go away please, I'm allergic to douchebags",
                "If you had any intelligence to question I would have questioned it already.",
                "I wish I had a lower I.Q,  maybe then I could enjoy your company.",
                "I would answer you back but life is too short, just like your d*ck",
                "Mirrors don't lie. Lucky for you, they can't laugh either.",
                "I was right there are no humans in this channel",
                "You have a face not even a mother could love....",
                "You know what I would find if I looked up idiot in the dictionary a picture of you?",
                "You make the guys on Jackass look like Einstein.....",
                "I would slap you but I don't want to make your face look any better",
                "Sorry, I can't put small objects in my mouth or Ill choke",
                "You should wear a condom on your head, if you're going to be a dick you might as well dress like one",
                "Have you been shopping lately? They're selling lives at the mall, you should get one"
 
];
var roasts = roast[Math.floor(Math.random() * roast.length)];
    message.channel.send(user.username + " " + roasts);
  }

if (message.content.startsWith(prefix + "countdown")) {
let i = 60;
message.channel.sendMessage("Countdown: " + i + "s").then(message => {
    var countInterval = setInterval(() => {
      if(i === 10) {
        message.edit(i = "Countdown complete.");
        return clearInterval(countInterval);
      }
      message.edit("Countdown: " + (i = i - 10) + "s")
    }, 10000);
  })
}


});
