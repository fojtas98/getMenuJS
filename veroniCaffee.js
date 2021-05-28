module.exports = async (browser) => {
  console.log("connecting to VeroniCaffee");
  const page = await browser.newPage();
  await page
    .goto("https://www.menicka.cz/4921-veroni-coffee--chocolate.html")
    .catch((err) => {
      console.log("nepodarilo se pripojit na menicka.cz");
    });
  const res = await page.evaluate(() => {
    const menu = document.querySelectorAll(".menicka");
    const todayMenu = Array.from(
      Array.from(menu)[0].querySelectorAll(".jidlo ,.polevka")
    );
    return todayMenu.map((food) => food.textContent.replaceAll(/\n/g, ""));
  });
  console.log("\n\nMenu Veroni Caffee");
  res.forEach((food) => {
    console.log(food.replace("   ", ""));
  });
};
