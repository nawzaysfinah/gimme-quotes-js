const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const get = async () => {
  const databaseId = process.env.DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  console.log(response);
};

module.exports = {
  getQuotes: () => get(response),
};
