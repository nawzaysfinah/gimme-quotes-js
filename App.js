GIMME = "5912247638:AAHo1kYgW2c6TWiOuJAlWuSfKouzoVAFTQE"; // gimmequotes_bot
TEST = "5767083831:AAElUmpfZ6v7ZLJX_yZ4PEgf7W8fI91bmJs"; // nawzaysfinah bot
NOTION_TOKEN = "secret_aMGOZvx3omcSowLfmIOi93VeQBWU5LVWDXknwtXrXBy";
DATABASE_ID = "a0238c1d750f447da33929fedff8b494"; // https://syaz.notion.site/a0238c1d750f447da33929fedff8b494?v=a1a13f6e68394476a37bec9cdc98c673

const { Telegraf } = require("telegraf");

const bot = new Telegraf(TEST);

bot.command("start", (msg) => {
  const chatId = msg.chat.id;
  bot.telegram.sendMessage(
    chatId,
    `Hey ${msg.from.first_name}!\nWelcome to the Gimme Quotes Bot!`
  );
});

bot.command("about", (msg) => {
  const chatId = msg.chat.id;
  bot.telegram.sendMessage(
    chatId,
    `Gimme Quotes bot is a telegram bot that send and receives quotes via telegram to a Notion database via the Notion-API\n\nQuotes database can be accessed at \nhttps://syaz.super.site/quotespicsmusings\n\n`
  );
  setTimeout(async () => {
    bot.telegram.sendMessage(chatId, `How bout a quote then?`);
  }, 2000);
});

bot.command("help", (msg) => {
  const chatId = msg.chat.id;
  bot.telegram.sendMessage(
    chatId,
    `To send a quote, please send them to me in the following format: ⬇️\n`
  );
  setTimeout(async () => {
    bot.telegram.sendMessage(
      chatId,
      `This is the quote./This is the author's name\n`
    );
  }, 2000);
  setTimeout(async () => {
    bot.telegram.sendMessage(
      chatId,
      `For e.g.\nThis is an awesome inspirational quote/Author's Name`
    );
  }, 2000);
  setTimeout(async () => {
    bot.telegram.sendMessage(
      chatId,
      `If you're ready, you can start sending me quotes! ☺️`
    );
  }, 2000);
});

bot.launch();
