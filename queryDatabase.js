// Import any required dependencies, e.g., the 'notion' module
// const notion = require('notion'); // Adjust the import as needed
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Define an async function to query the database
const queryDatabase = async () => {
  try {
    (async () => {
      const databaseId = process.env.DATABASE_ID;
      const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
          property: "Chosen item",
          checkbox: {
            equals: true,
          },
        },
        // sorts: [
        //   {
        //     property: "Last ordered",
        //     direction: "ascending",
        //   },
        // ],
      });
      console.log(response);
    })();
  } catch (error) {
    // Handle errors here
    console.error(error);
    throw error;
  }
};

// Export the async function for use in other parts of your code
module.exports = { queryDatabase };

// const databaseId = process.env.DATABASE_ID;
// const response = await notion.databases.query({
//   database_id: databaseId,
// });
// return response;
