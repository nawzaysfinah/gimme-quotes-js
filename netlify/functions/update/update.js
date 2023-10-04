const sendMessage = require("../../../sendMessage");
const messageParts = require("../../../messageParts");
// const receiveQuote = require("../../../receiveQuote");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  const { command, botName, extra } = messageParts(message.text);
  // const { response } = receiveQuote(message);

  if (botName === "iamjusttestingbot" || botName === null) {
    switch (command) {
      case "echo":
        await sendMessage(message.chat.id, extra || "ECHO!");
        break;
      // case "start":
      //   await sendMessage(
      //     message.chat.id,
      //     extra ||
      //       `Hey ${msg.from.first_name}!\nWelcome to the Gimme Quotes Bot!`
      //   );
      //   break;
      default:
        await sendMessage(message.chat.id, "Sorry I don't speak 'stupid'.");
    }
  }

  return { statusCode: 200 };
};
