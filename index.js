const puppeteer = require("puppeteer");
const uCapa = require("./uCapa");
const veroniCaffee = require("./veroniCaffee");

const getMenu = async () => {
  const browser = await puppeteer.launch();
  const today = new Date().getUTCDay();
  await Promise.all([uCapa(browser, today), veroniCaffee(browser)]);
  browser.close();
};

getMenu();
