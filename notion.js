const Client = require("@notionhq/client").Client;

// let NOTION_API_KEY = "secret_aMGOZvx3omcSowLfmIOi93VeQBWU5LVWDXknwtXrXBy";
// let DATABASE_ID = "a0238c1d750f447da33929fedff8b494";

const NOTION_CLIENT = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = process.env.DATABASE_ID;

async function getDatabaseData(client, databaseId) {
  try {
    let results = [];

    const response = await client.databases.query({
      database_id: databaseId,
      // filter: {
      //   property: "Chosen item",
      //   checkbox: {
      //     equals: true,
      //   },
      // },
    });
    results = [...results, ...response.results];

    // while loop variables
    let hasMore = response.has_more;
    let nextCursor = response.next_cursor;

    // keep fetching while there are more results
    while (hasMore) {
      const response = await client.databases.query({
        database_id: databaseId,
        start_cursor: nextCursor,
      });
      results = [...results, ...response.results];
      hasMore = response.has_more;
      nextCursor = response.next_cursor;
    }

    return results;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const data = await getDatabaseData(NOTION_CLIENT, DATABASE_ID);
  const notionData = JSON.stringify(data);
  const parsedData = JSON.parse(notionData); // parse the data so that the quotes and author can be retrieved

  quotes = [];
  authors = [];

  for (const result of parsedData) {
    const quote = result.properties.Quote.rich_text[0].plain_text;
    const author = result.properties.Author.title[0].plain_text;

    quotes.push(quote);
    authors.push(author);
    // console.log(quotes);
  }

  const quoteChoice = Math.floor(Math.random() * quotes.length); // Pick a random index between 0 and the number of available quotes
  const Quote_msg = quotes[quoteChoice]; // Pick the quote at the random index
  const Author_msg = authors[quoteChoice]; // Pick the author at the random index
  const forTele = "'" + Quote_msg + "'" + " by " + Author_msg;
  // console.log(forTele);
  // console.log(
  //   "the quote choice is " + quoteChoice + " and the quote " + forTele
  // );

  return forTele;
}

main();

// Call the function to fetch data from the database
module.exports = {
  main: main,
};
