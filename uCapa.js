// const { getPage } = require("./helpers");
const fetch = require("node-fetch");
const cheerio = require("cheerio");

module.exports = async (today) => {
  if (today < 1 || today > 5) {
    console.log(
      "\n\nMenu pivnice U capa\nPivnice u Capa na dnes nema menu, ale muzete si vybrat z jejich stale nabidky: https://www.pivnice-ucapa.cz/rozvoz.php"
    );
    return;
  }
  const week = [];
  const html = await fetch("https://www.pivnice-ucapa.cz/denni-menu.php").then(
    (res) => res.text()
  );
  const $ = cheerio.load(html);
  $(".cont").each((i, el) => {
    const day = $(el).text();
    week.push(day);
  });
  console.log(
    "\nMenu pivnice U capa\n" + week[today - 1].replace(/\s\s+/g, "\n")
  );
};
