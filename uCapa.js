module.exports = async (browser, today) => {
  console.log("connecting to U capa");
  if (today > 5) {
    console.log(
      "\n\nMenu pivnice U capa\nPivnice u Capa na dnes nema menu, ale muzete si vybrat z jejich stale nabidky: https://www.pivnice-ucapa.cz/rozvoz.php"
    );
    return;
  }
  const page = await browser.newPage();
  await page.goto("https://www.pivnice-ucapa.cz/denni-menu.php");
  const res = await page.evaluate((today) => {
    const day = Array.from(document.querySelectorAll(".cont"));
    const foodArray = Array.from(
      day[today - 1].querySelectorAll(".row-food ,.polevka")
    );
    return foodArray.map((food) => food.textContent);
  }, today);
  console.log("\n\nMenu pivnice U capa");
  res.forEach((food) => console.log(food.replace(/\n/g, "")));
};
