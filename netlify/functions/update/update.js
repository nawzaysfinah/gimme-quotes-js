const sendMessage = require("/Users/syazwanhanif/repos/gimme-quotes-js/sendMessage");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  await sendMessage(message.chat.id, "I got your message!");
  return { statusCode: 200 };
};
