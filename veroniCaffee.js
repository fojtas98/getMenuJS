const fetch = require("node-fetch");
const cheerio = require("cheerio");

module.exports = async () => {
  const html = await fetch(
    "https://www.menicka.cz/4921-veroni-coffee--chocolate.html"
  ).then((res) => res.textConverted());
  const week = [];
  const $ = cheerio.load(html);
  $(".menicka").each((i, el) => {
    const day = $(el).text();
    week.push(day);
  });

  console.log("\nMenu Veroni Caffee\n" + week[0].replace(/\s\s+/g, "\n"));
};
