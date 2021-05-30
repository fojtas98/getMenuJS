const { getPage } = require("./helpers");

module.exports = async (browser, today) => {
  if (today < 1 || today > 5) {
    console.log(
      "\n\nMenu pivnice U capa\nPivnice u Capa na dnes nema menu, ale muzete si vybrat z jejich stale nabidky: https://www.pivnice-ucapa.cz/rozvoz.php"
    );
    return;
  }
  console.log("connecting to U capa");
  const page = await getPage(
    browser,
    "https://www.pivnice-ucapa.cz/denni-menu.php"
  );
  const res = await page.evaluate((today) => {
    const day = Array.from(document.querySelectorAll(".cont"));
    const foodArray = Array.from(
      day[today - 1].querySelectorAll(".row-food ,.polevka")
    );
    return foodArray.map((food) => food.textContent);
    ç;
  }, today);
  console.log("\n\nMenu pivnice U capa");
  res.forEach((food) => console.log(food.replace(/\n/g, "")));
};
