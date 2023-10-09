// const { Client } = require("@notionhq/client");
// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// const queryDatabase = async () => {
//   const databaseId = process.env.DATABASE_ID;
//   const response = await notion.databases.query({
//     database_id: databaseId,
//   });
//   console.log(response);
// };

// module.exports = {
//   queryDatabase,
// };

//

const { queryDatabase } = require("./queryDatabase");

async function fetchDataFromDatabase() {
  try {
    const response = await queryDatabase();
    console.log(response);
    // You can further process the response data here
  } catch (error) {
    // Handle errors here if needed
    console.error(error);
  }
}

fetchDataFromDatabase();

// Call the function to fetch data from the database
module.exports = { fetchDataFromDatabase };
