const sendMessage = require("../../../sendMessage");
const messageParts = require("../../../messageParts");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  const { command, botName, extra } = messageParts(message.text);

  if (botName === "iamjusttestingbot" || botName === null) {
    switch (command) {
      case "echo":
        await sendMessage(message.chat.id, extra || "ECHO!");
        break;
      case "start":
        await sendMessage(message.chat.id, "alright partner, time to go!");
        break;
      default:
        await sendMessage(message.chat.id, "Sorry I don't speak 'stupid'.");
    }
  }

  return { statusCode: 200 };
};
