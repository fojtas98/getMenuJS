const fetch = require("node-fetch");
const cheerio = require("cheerio");

module.exports = async (today) => {
  if (today < 1 || today > 5) {
    console.log(
      "\n\nMenu Suzie's Steakhouse Brno\nSuzie's Steakhouse Brno na dnes nema denni menu."
    );
    return;
  }
  const week = [];
  await fetch("http://www.suzies.cz/poledni-menu.html")
    .then((res) => res.text())
    .then((text) => {
      const $ = cheerio.load(text);
      $(".day").each((i, el) => {
        const day = $(el).text();
        week.push(day);
      });
    });
  console.log(
    "\nMenu Suzie's Steakhouse Brno\n" + week[today - 1].replace(/\s\s+/g, "\n")
  );
};
