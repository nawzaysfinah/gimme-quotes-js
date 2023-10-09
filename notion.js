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
