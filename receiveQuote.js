let NOTION_API_KEY = "secret_aMGOZvx3omcSowLfmIOi93VeQBWU5LVWDXknwtXrXBy";
let DATABASE_ID = "a0238c1d750f447da33929fedff8b494";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: NOTION_API_KEY,
})(async () => {
  const res = notion.databases.query({
    database_id: DATABASE_ID,
    filter: {},
  });
  console.log(res);
})();

quote = res

module.exports = {
  getQuotes: () => get(quote),
};
