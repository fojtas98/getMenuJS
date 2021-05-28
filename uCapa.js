module.exports = async (page, today) => {
  await page.goto("https://www.pivnice-ucapa.cz/denni-menu.php");
  console.log("get page");
  const dates = await page.evaluate((today) => {
    const day = document.querySelectorAll(".cont");
    console.log(day);
    const foodArray = Array.from(
      Array.from(day)[today - 1].querySelectorAll(".row-food ,.polevka")
    );
    return foodArray.map((food) => food.textContent);
  }, today);
  console.log("\nMenu pivnice U capa \n");
  dates.forEach((food) => console.log(food.replace("\n", "")));
};
