const { Client } = require("@notionhq/client");

const NOTION_API_KEY = "secret_aMGOZvx3omcSowLfmIOi93VeQBWU5LVWDXknwtXrXBy";
const DATABASE_ID = "a0238c1d750f447da33929fedff8b494";
const NOTION_CLIENT = new Client({ auth: NOTION_API_KEY });

async function getDatabaseData(client, databaseId) {
  try {
    const results = [];

    // Specify the properties you need in the `properties` parameter
    const response = await client.databases.query({
      database_id: databaseId,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [{ property: "Date", direction: "descending" }],
    });

    results.push(...response.results);
    return results;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const data = await getDatabaseData(NOTION_CLIENT, DATABASE_ID);

  const quotes = data.map((result) => {
    const quote = result.properties.Quote.rich_text[0].plain_text;
    const author = result.properties.Author.title[0].plain_text;
    return `'${quote}' by ${author}`;
  });

  if (quotes.length === 0) {
    return "No quotes found."; // Handle the case when no quotes are available
  }

  const quoteChoice = Math.floor(Math.random() * quotes.length);
  return quotes[quoteChoice];
}

// Export the main function
module.exports = {
  main: main,
};
