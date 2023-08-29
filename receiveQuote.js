const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

module.exports = (text) => {
  (async () => {
    const databaseId = "a0238c1d750f447da33929fedff8b494";
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [
          {
            property: "Chosen item",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });
    console.log(response);
  })();

  return {
    response,
  };
};
