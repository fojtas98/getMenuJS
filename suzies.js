module.exports = async (browser, today) => {
  if (today < 1 || today > 5) {
    console.log(
      "\n\nMenu Suzie's Steakhouse Brno\nSuzie's Steakhouse Brno na dnes nema denni menu."
    );
    return;
  }
  const page = await browser.newPage();
  await page.goto("http://www.suzies.cz/poledni-menu.html");
  const res = await page.evaluate((today) => {
    const day = Array.from(document.querySelectorAll(".day"));
    const foodArray = Array.from(day[today - 1].querySelectorAll(".item"));
    return foodArray.map((food) => food.textContent.replaceAll(/\s\s+/g, " "));
  }, today);
  console.log("\n\nMenu Suzie's Steakhouse Brno");
  res.forEach((res) => console.log(res));
};
