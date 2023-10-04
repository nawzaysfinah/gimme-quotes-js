const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

TEST = "5767083831:AAElUmpfZ6v7ZLJX_yZ4PEgf7W8fI91bmJs"; // nawzaysfinah bot
const bot = new Telegraf(TEST);

bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();

const sendMessage = require("../../../sendMessage");
const messageParts = require("../../../messageParts");
// const receiveQuote = require("../../../receiveQuote");

// exports.handler = async (event) => {
//   const { message } = JSON.parse(event.body);
//   const { command, botName, extra } = messageParts(message.text);
//   // const { response } = receiveQuote(message);

//   if (botName === "iamjusttestingbot" || botName === null) {
//     switch (command) {
//       case "echo":
//         await sendMessage(message.chat.id, extra || "ECHO!");
//         break;
//       case "start":
//         await sendMessage(
//           message.chat.id,
//           extra || "This will start your program"
//         );
//         await bot.command("start", (msg) => {
//           const chatId = msg.chat.id;
//           bot.telegram.sendMessage(
//             chatId,
//             `Hey ${msg.from.first_name}!\nWelcome to the Gimme Quotes Bot!`
//           );
//         });
//         break;
//       default:
//         await sendMessage(message.chat.id, "Sorry I don't speak 'stupid'.");
//     }
//   }

//   return { statusCode: 200 };
// };
