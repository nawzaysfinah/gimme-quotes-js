const axios = require("axios").default;

const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const get = async (query) => {
  const res = await axios.post(
    `https://api.notion.com/v1/databases/${process.env.DATABASE_ID}/query`,
    { query }
  );
  return res.data.data;
};

const quotes = res["properties"]["Quote"]["rich_text"][0]["plain_text"];

module.exports = {
  getQuotes: () => get(quotes),
};

// const options = {
//   method: "POST",
//   url: `https://api.notion.com/v1/databases/${process.env.DATABASE_ID}/query`,
//   headers: {
//     accept: "application/json",
//     "Notion-Version": "2022-06-28",
//     "content-type": "application/json",
//   },
//   data: { page_size: 100 },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// module.exports = {
//   getQuotes: () => get(response),
// };
