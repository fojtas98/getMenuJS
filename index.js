const puppeteer = require("puppeteer");
const suzies = require("./suzies");
const uCapa = require("./uCapa");
const veroniCaffee = require("./veroniCaffee");

const getMenu = async () => {
  const browser = await puppeteer.launch();
  const today = new Date().getUTCDay();
  await Promise.all([
    uCapa(browser, 1),
    veroniCaffee(browser),
    suzies(browser, 1),
  ]);
  browser.close();
};

getMenu();
